import React from 'react'

const List = ({ list }) =>
  list.map((item) => <Item key={item.objectID} item={item} />)

const Item = ({ item: { url, title, author, num_comments, points } }) => (
  <div>
    <a href={url}>
      <h4>{title}</h4>
    </a>
    <p>Author: {author}</p>
    <p>comments: {num_comments}</p>
    <p>Points: {points}</p>
    <hr />
  </div>
)

export default List
