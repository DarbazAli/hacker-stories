import React, { useState } from 'react'
import List from './components/List.js'

import Search from './components/Search.js'

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

  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => setSearchTerm(e.target.value)

  const searchStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>Hello Hackers</h1>
      <Search onSearch={handleChange} term={searchTerm} />
      <List list={searchStories} />
    </div>
  )
}

export default App
