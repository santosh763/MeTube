import React from 'react'

const ButtonList = (props) => {
  console.log(props?.name);
  return (
    <>
    <button className='flex items-center rounded-md px-5 py-1 bg-slate-200'>{props?.name}</button>
    </>
  )
}

export default ButtonList