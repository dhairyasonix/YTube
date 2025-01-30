import React from 'react'

const Button = ({name}) => {
   
  return (
    <div>
        <div>
            <button className='m-2 px-3 py-1 rounded-lg bg-gray-100'>{name}</button>
        </div>
    </div>
  )
}

export default Button