import React from 'react'
import ListItem from './ListItem'

const List = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <ListItem item={item} key={item.objectID} />
      ))}
    </div>
  )
}

export default List
