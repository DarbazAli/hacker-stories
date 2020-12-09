import React, { useState } from 'react'
import { sortBy } from 'lodash'

const SORTS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list, 'title'),
  AUTHOR: (list) => sortBy(list, 'author'),
  COMMENT: (list) => sortBy(list, 'num_comments').reverse(),
  POINT: (list) => sortBy(list, 'points').reverse(),
}

const List = ({ list, onRemoveStory }) => {
  const [sort, setSort] = useState('NONE')

  const handleSort = (sortKey) => {
    setSort(sortKey)
  }

  const sortFunction = SORTS[sort]
  const sortedList = sortFunction(list)

  return (
    <div>
      <div>
        <h4>Sort by:</h4>
        <button type='button' onClick={() => handleSort('TITLE')}>
          Title
        </button>

        <button type='button' onClick={() => handleSort('AUTHOR')}>
          Author
        </button>
        <button type='button' onClick={() => handleSort('COMMENT')}>
          Comment
        </button>
        <button type='button' onClick={() => handleSort('POINT')}>
          Point
        </button>
      </div>

      {sortedList.map((item) => (
        <Item key={item.objectID} item={item} onRemoveStory={onRemoveStory} />
      ))}
    </div>
  )
}

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
