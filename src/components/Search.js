import React from 'react'

const Search = ({ onSearch, search }) => {
  return (
    <div>
      <label htmlFor='search'>Search:</label>
      <input
        type='text'
        value={search}
        name='search'
        id='search'
        onChange={onSearch}
      />
    </div>
  )
}

export default Search
