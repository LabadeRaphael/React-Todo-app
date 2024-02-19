import React from 'react'

const Input = ({ placeholder, myFunc, value }) => {
  return (
    <input
      className='form-control w-75'
      type='text'
      placeholder={placeholder}
      onChange={myFunc}
      value={value}
    />
  )
}

export default Input
