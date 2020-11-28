import React, { useState, useEffect } from 'react'
import Search from './components/Search.js'
import List from './components/List.js'

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

const getAsyncStories = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ data: { stories: initialStories } }), 2000)
  )
// create a custom hook
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

const App = () => {
  // main state of the App
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', '')

  const [stories, setStories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getAsyncStories()
      .then((result) => {
        setStories(result.data.stories)
        setIsLoading(false)
      })
      .catch(() => setIsError(true))
  }, [])

  // search handler function
  const handleSearch = (e) => setSearchTerm(e.target.value)

  // remvoer function
  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    )
    setStories(newStories)
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
