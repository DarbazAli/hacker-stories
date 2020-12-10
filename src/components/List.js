import React, { useState } from 'react'
import { sortBy } from 'lodash'

import arrowUp from '../assets/ic_arrow_drop_up_18px.svg'
import arrowDown from '../assets/ic_arrow_drop_down_18px.svg'
import closeIcon from '../assets/ic_close_36px.svg'

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
        <SortButton onSort={handleSort} state={sort} sortKey='TITLE' />
        <SortButton onSort={handleSort} state={sort} sortKey='AUTHOR' />
        <SortButton onSort={handleSort} state={sort} sortKey='COMMENT' />
        <SortButton onSort={handleSort} state={sort} sortKey='POINT' />
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
        <h5>{title}</h5>
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

        <span onClick={() => onRemoveStory(item)} style={{ cursor: 'pointer' }}>
          <img src={closeIcon} alt='close icon' />
        </span>
      </p>
      <hr />
    </div>
  )
}

const SortButton = ({ onSort, state, sortKey }) => {
  return (
    <button type='button' onClick={() => onSort(sortKey)}>
      {sortKey}
      <img
        src={
          state.sortKey === sortKey && !state.isReversed ? arrowUp : arrowDown
        }
        alt='arrow icon'
      />
    </button>
  )
}
export default List
