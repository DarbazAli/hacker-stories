import React, { useState, useEffect } from 'react'
import stories from './data.js'

import List from './components/List.js'
import Search from './components/Search.js'

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

  useEffect(() => {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div>
      <h1>Hacker Stories</h1>

      <Search onSearch={handleSearch} search={searchTerm} />

      <List list={searchedStories} />
    </div>
  )
}

export default App
