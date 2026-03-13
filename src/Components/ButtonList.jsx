import React from 'react'

const ButtonList = (props) => {
  return (
    <button
      className='flex items-center rounded-full px-4 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium shadow-sm hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-colors duration-200 text-sm border border-gray-200 dark:border-gray-700'
    >
      {props?.name}
    </button>
  )
}

export default ButtonList