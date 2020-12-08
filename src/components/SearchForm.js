import React from 'react'
import InputWithLabel from './InputWithLabel.js'

export const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
  <form onSubmit={onSearchSubmit}>
    <InputWithLabel
      onInputChange={onSearchInput}
      value={searchTerm}
      id='search'
      type='text'
      isFocused={true}
    >
      Search
    </InputWithLabel>

    <button className='button-primary' type='submit' disabled={!searchTerm}>
      Submit
    </button>
  </form>
)
