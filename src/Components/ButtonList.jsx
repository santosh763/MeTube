import React from 'react'

const ButtonList = (props) => {
  return (
    <>
    <button className='flex items-center rounded-md px-5 py-1 bg-slate-200'>{props?.name}</button>
    </>
  )
}

export default ButtonList