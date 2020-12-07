import React from 'react'

const List = ({ list, onRemoveStory }) =>
  list.map((item) => (
    <Item key={item.objectID} item={item} onRemoveStory={onRemoveStory} />
  ))

const Item = ({ item, onRemoveStory }) => {
  const { url, title, author, num_comments, points } = item

  return (
    <div>
      <a href={url}>
        <h4>{title}</h4>
      </a>
      <p>Author: {author}</p>
      <p>comments: {num_comments}</p>
      <p>Points: {points}</p>
      <button onClick={() => onRemoveStory(item)}>Dismiss</button>
      <hr />
    </div>
  )
}
export default List
