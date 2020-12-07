import React from 'react'

const Search = ({ onSearch }) => {
  return (
    <div>
      <label htmlFor='search'>Search:</label>
      <input type='text' name='search' id='search' onChange={onSearch} />
    </div>
  )
}

export default Search
