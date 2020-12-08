import React, { useState, useEffect, useReducer } from 'react'
import initialStories from './data.js'

import List from './components/List.js'
import InputWithLabel from './components/Search.js'
import Loading from './components/Loading.js'
import storiesReducer from './reducers/storiesReducer.js'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='

/* 
====================================================================
CUSTOM HOOK
====================================================================
*/
const useSemiPresistentState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState)

  useEffect(() => {
    localStorage.setItem('value', value)
  }, [value, key])

  return [value, setValue]
}

/* 
====================================================================
GET DATA ASYNCHRONOUSLY
====================================================================
*/
const getAsyncStories = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve({ data: { stories: initialStories } }), 2000)
  )

/* 
====================================================================
APP COMPONENT
====================================================================
*/
const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPresistentState('search', 'react')
  const [stories, dispatchStories] = useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  })

  useEffect(() => {
    if (!searchTerm) return

    dispatchStories({ type: 'STORIES_FETCH_INIT' })

    fetch(`${API_ENDPOINT}${searchTerm}`)
      .then((response) => response.json())

      .then((result) => {
        dispatchStories({
          type: 'STORIES_FETCH_SUCCESS',
          payload: result.hits,
        })
      })

      .catch(() => {
        dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
      })
  }, [searchTerm])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    })
  }

  // const searchedStories = stories.data.filter((story) =>
  //   story.title.toLowerCase().includes(searchTerm.toLowerCase())
  // )
  return (
    <div>
      <h1>Hacker Stories</h1>

      <InputWithLabel
        onInputChange={handleSearch}
        value={searchTerm}
        id='search'
        type='text'
        isFocused={true}
      >
        <Label label='Search' />
      </InputWithLabel>

      {/* give feedback if an error ocured */}
      {stories.isError && (
        <p style={{ color: 'red' }}>Something went wrong...</p>
      )}

      {stories.isLoading ? (
        <Loading />
      ) : (
        <List list={stories.data} onRemoveStory={handleRemoveStory} />
      )}
    </div>
  )
}

const Label = ({ label }) => <strong>{label}:</strong>

export default App
