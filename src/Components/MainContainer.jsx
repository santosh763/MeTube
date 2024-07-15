import React from 'react'
import ButtonList from './ButtonList'
import VedioContainer from './VedioContainer'

const MainContainer = () => {
  const butoonNames = ["All", "Sports", "Games", "Music", "Live", "Laptos", "News", "Comedy", "Sports"]
  return (
    <div className='flex flex-col m-2 gap-2 overflow-hidden'>
      <div className="flex flex-row gap-2 w-full fixed bg-white z-[10] mt-[-8px]">
        {
          butoonNames.map((item) => {
            return (
              <ButtonList name={item} />
            )
          })
        }
      </div>
      <div className='flex mt-10'>

      <VedioContainer />
      </div>
    </div>
  )
}

export default MainContainer