import React, { useState } from 'react'
import { sortBy } from 'lodash'

import arrowUp from '../assets/ic_arrow_drop_up_18px.svg'
import arrowDown from '../assets/ic_arrow_drop_down_18px.svg'

const SORTS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list, 'title'),
  AUTHOR: (list) => sortBy(list, 'author'),
  COMMENT: (list) => sortBy(list, 'num_comments').reverse(),
  POINT: (list) => sortBy(list, 'points').reverse(),
}

const List = ({ list, onRemoveStory }) => {
  const [sort, setSort] = useState({
    sortKey: 'NONE',
    isReversed: false,
  })

  const handleSort = (sortKey) => {
    const isReversed = sort.sortKey === sortKey && !sort.isReversed
    setSort({ sortKey, isReversed })
  }

  const sortFunction = SORTS[sort.sortKey]
  const sortedList = sort.isReversed
    ? sortFunction(list).reverse()
    : sortFunction(list)

  return (
    <div>
      <div>
        <h4>Sort by:</h4>
        <button type='button' onClick={() => handleSort('TITLE')}>
          Title{' '}
          <img
            src={
              sort.sortKey === 'TITLE' && !sort.isReversed ? arrowUp : arrowDown
            }
            alt='arrow icon'
          />
        </button>

        <button type='button' onClick={() => handleSort('AUTHOR')}>
          Author{' '}
          <img
            src={
              sort.sortKey === 'AUTHOR' && !sort.isReversed
                ? arrowUp
                : arrowDown
            }
            alt='arrow icon'
          />
        </button>
        <button type='button' onClick={() => handleSort('COMMENT')}>
          Comment{' '}
          <img
            src={
              sort.sortKey === 'COMMENT' && !sort.isReversed
                ? arrowUp
                : arrowDown
            }
            alt='arrow icon'
          />
        </button>
        <button type='button' onClick={() => handleSort('POINT')}>
          Point{' '}
          <img
            src={
              sort.sortKey === 'POINT' && !sort.isReversed ? arrowUp : arrowDown
            }
            alt='arrow icon'
          />
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
