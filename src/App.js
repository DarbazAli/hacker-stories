import React, { useState, useEffect, useReducer } from 'react'
import Search from './components/Search.js'
import List from './components/List.js'
import storiesReducer from './reducers/storiesReducer.js'

const initialStories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },

  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 4,
    objectID: 1,
  },

  {
    title: 'View',
    url: 'https://view.js.org/',
    author: 'Van don norman',
    num_comments: 1,
    points: 5,
    objectID: 2,
  },
]

/*--------------------------------------------------------
DATA FETCH ASYNCROUNIZER
---------------------------------------------------------*/
const getAsyncStories = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ data: { stories: initialStories } }), 2000)
  )

/*--------------------------------------------------------
CUSTOM HOOK
---------------------------------------------------------*/
// this custom hook creates a search term to be used as a state inside App component
// key -> is the key to localState parameter
// initialState -> the inital state that the hook uses

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState)

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])

  return [value, setValue]
}

/*--------------------------------------------------------
APP COMPONENT
---------------------------------------------------------*/
const App = () => {
  // main state of the App
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', '')

  // const [stories, setStories] = useState([])
  const [stories, dispatchStories] = useReducer(storiesReducer, [])

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getAsyncStories()
      .then((result) => {
        // setStories(result.data.stories)
        dispatchStories({
          type: 'SET_STORIES',
          payload: result.data.stories,
        })
        setIsLoading(false)
      })
      .catch(() => setIsError(true))
  }, [])

  // search handler function
  const handleSearch = (e) => setSearchTerm(e.target.value)

  // remvoer function
  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    })
  }

  // filtered sotires
  const searchStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>Hacker Stories</h1>

      <Search
        onSearch={handleSearch}
        value={searchTerm}
        id='search'
        type='text'
        isFocused={true}
      >
        Search
      </Search>
      {isError && <p>Something went wrong ...</p>}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={searchStories} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  )
}

export default App
