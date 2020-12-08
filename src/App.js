import React, { useState, useEffect, useReducer, useCallback } from 'react'
import axios from 'axios'

import List from './components/List.js'
import Loading from './components/Loading.js'
import storiesReducer from './reducers/storiesReducer.js'
import { SearchForm } from './components/SearchForm'

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

  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`)

  const handleFetchStories = useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' })

    try {
      const { data } = await axios.get(url)
      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: data.hits,
      })
    } catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
    }
  }, [url])

  useEffect(() => {
    handleFetchStories()
  }, [handleFetchStories])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    })
  }

  const handleSearchSubmit = (e) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`)
    e.preventDefault()
  }

  return (
    <div>
      <h1>Hacker Stories</h1>

      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearch}
        onSearchSubmit={handleSearchSubmit}
      />

      <div>
        {/* give feedback if an error ocured */}
        {stories.isError && (
          <p style={{ color: 'red' }}>Something went wrong...</p>
        )}

        {stories.isLoading ? (
          <Loading />
        ) : (
          <List
            className='story-list'
            list={stories.data}
            onRemoveStory={handleRemoveStory}
          />
        )}
      </div>
    </div>
  )
}

export default App
