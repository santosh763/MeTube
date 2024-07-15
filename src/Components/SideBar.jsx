import React, { useState } from 'react'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Home from '@mui/icons-material/OtherHouses';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const toggleSideBar=useSelector(store=>store.app.isSlideBarOpen)
  const isSideMenuClose=useSelector(store=>store.app.isSideMenuClose)
  return (
    <>
{isSideMenuClose ?"":
    <div className='fixed left-0 pl-5 bg-white z-[15] h-full'>
      {
        toggleSideBar ?
          <div className="flex flex-col w-[200px] gap-3 h-full ">
            <div className='h-7  w-full items-center rounded-sm gap-1 flex'><Link to="/"><Home/>Home</Link></div>
            <div className='h-7 w-full items-center rounded-sm gap-1 flex'><MusicNoteIcon/>Music</div>
            <div className='h-7 w-full items-center rounded-sm gap-1 flex' ><SubscriptionsIcon/>subsription</div>

          </div>
          :
          <div className="flex flex-col w-[80px] h-full gap-8">
            <Link to="/"><Home/></Link>
            <MusicNoteIcon/>
            <SubscriptionsIcon/>
          </div>
      }
    </div>
    }
    </>
  )
}

export default SideBar