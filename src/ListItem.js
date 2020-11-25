import React from 'react'

const ListItem = ({ item }) => {
  return (
    <div>
      <div key={item.objectID}>
        <h3>
          <a href={item.url}>{item.title}</a>
        </h3>
        <p>
          Author: <b>{item.author}</b>
        </p>
        <p>
          Number of comments: <b>{item.num_comments}</b>
        </p>
        <p>
          Points: <b>{item.points}</b>
        </p>
      </div>
    </div>
  )
}

export default ListItem
