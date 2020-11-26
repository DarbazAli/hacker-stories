import React from 'react'

const Search = ({ onSearch, term }) => {
  return (
    <div>
      <label htmlFor='search'> Search</label>
      <input id='search' type='text' value={term} onChange={onSearch} />
    </div>
  )
}

export default Search
