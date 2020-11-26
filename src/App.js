import React, { useState } from 'react'

import List from './List'
import Search from './Search'

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

  const [term, setTerm] = useState('')

  const handleSearch = (e) => setTerm(e.target.value)

  const serachedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(term.toLowerCase())
  )
  return (
    <div>
      <h1>Hello Hackers</h1>
      {term}
      <br />
      <Search onSearch={handleSearch} term={term} />
      <List list={serachedStories} />
    </div>
  )
}

export default App
