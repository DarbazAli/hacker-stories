import React, { useRef, useEffect } from 'react'

const InputWithLabel = ({
  onInputChange,
  value,
  id,
  children,
  type = 'text',
  isFocused,
}) => {
  const inputRef = useRef()

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused])
  return (
    <div>
      <label htmlFor={children}>{children}</label>
      <input
        type={type}
        name={children}
        id={id}
        value={value}
        onChange={onInputChange}
        ref={inputRef}
      />
    </div>
  )
}

export default InputWithLabel
