import React from 'react'
import ListItem from './ListItem'
const list = [
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

const List = () => {
  return (
    <div>
      {list.map((item) => (
        <ListItem item={item} key={item.objectID} />
      ))}
    </div>
  )
}

export default List
