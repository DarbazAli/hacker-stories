import React from 'react'

const Search = ({ onSearch, term }) => (
  <div>
    <label htmlFor='search'>
      <b>Search</b>
    </label>
    <br />
    <input
      type='text'
      id='search'
      onChange={onSearch}
      value={term}
      placeholder='search for stories'
    />
  </div>
)

export default Search
