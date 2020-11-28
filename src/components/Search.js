import React, { useRef, Fragment, useEffect } from 'react'

const Search = ({ onSearch, value, id, type, children, isFocused }) => {
  const inputRef = useRef()
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused])

  return (
    <Fragment>
      <label htmlFor={id}>
        <strong>{children}</strong>
      </label>
      <br />
      <input
        type={type}
        id='search'
        onChange={onSearch}
        value={value}
        ref={inputRef}
      />
    </Fragment>
  )
}
export default Search
