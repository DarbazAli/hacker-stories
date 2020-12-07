import React, { useState } from 'react'
import stories from './data.js'

import List from './components/List.js'
import Search from './components/Search.js'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div>
      <h1>Hacker Stories</h1>

      <Search onSearch={handleSearch} />

      <List list={searchedStories} />
    </div>
  )
}

export default App
