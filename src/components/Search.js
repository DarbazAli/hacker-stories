import React from 'react'

const Search = ({ onSearch, term }) => (
  <div>
    <label htmlFor='search'>
      <b>Search</b>
    </label>
    <br />
    <input type='text' id='search' value={term} onChange={onSearch} />
  </div>
)

export default Search
