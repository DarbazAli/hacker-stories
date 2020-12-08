import React from 'react'

const List = ({ list, onRemoveStory }) =>
  list.map((item) => (
    <Item key={item.objectID} item={item} onRemoveStory={onRemoveStory} />
  ))

const Item = ({ item, onRemoveStory }) => {
  const { url, title, author, num_comments, points } = item

  return (
    <div className='story-item'>
      <a href={url}>
        <h4>{title}</h4>
      </a>

      <p>
        <span>
          Author: <strong>{author}</strong>
        </span>
        <span>
          comments: <strong>{num_comments}</strong>
        </span>
        <span>
          Points: <strong>{points}</strong>
        </span>
      </p>

      <button onClick={() => onRemoveStory(item)}>Dismiss</button>
      <hr />
    </div>
  )
}
export default List
