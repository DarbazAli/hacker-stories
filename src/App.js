import React, { useState, useEffect } from 'react'
import Search from './components/Search.js'
import List from './components/List.js'

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
  const stories = [
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

  // main state of the App
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React')

  // search handler function
  const handleSearch = (e) => setSearchTerm(e.target.value)

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

      <List list={searchStories} />
    </div>
  )
}

export default App
