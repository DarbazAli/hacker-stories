import React from 'react'

const List = ({ list, onRemoveItem }) =>
  list.map((item) => (
    <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
  ))

const Item = ({ item, onRemoveItem }) => {
  const { url, title, author, num_comments, points } = item

  return (
    <div>
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <p>
        Author: <b>{author}</b>
      </p>
      <p>
        Comments: <b>{num_comments}</b>
      </p>
      <p>
        Points: <b>{points}</b>
      </p>
      <button type='button' onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
      <hr />
    </div>
  )
}

export default List
