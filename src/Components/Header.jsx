import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../utils/appSlice';
const Header = () => {
  const dispatch = useDispatch()
  const [serchText,setSearchText]=useState("")
  return (
    <div className="flex justify-between  py-3  items-center sticky top-0 bg-white z-10">
      <div className='flex gap-3 items-center'>
        <button onClick={() => dispatch(toggleSideBar())}>
          <MenuIcon />
        </button>
        <a href="/">
          <div className='flex items-center'>
            <YouTubeIcon />
            MeTube
          </div>
        </a>
      </div>
      <div className='flex gap-3 items-center'>
        <div className='flex flex-col'>
        <div className='bg-slate-500 rounded-xl gap-1 items-center flex pr-1'>
          <input
            type='text'
            className='w-300px h-full rounded-xl border border-gray-400 '
            value={serchText}
            onChange={(e)=>{setSearchText(e.target.value)}}
          />
          <SearchIcon />
        </div>
        <div className='w-[250px] flex bg-white absolute top-10 z-[20]'>
        <ul>
          <li>h</li>
          <li>ihidciiewiohiwef</li>
          <li>ihidciiewiohiwef</li>
          <li>ihidciiewiohiwef</li>
          <li>ihidciiewiohiwef</li>
          <li>ihidciiewiohiwef</li>
          <li>ihidciiewiohiwef</li>
        </ul>
        </div>
        
        </div>
        <div className='rounded-full w-[30px] h-[30px] bg-slate-300 items-center justify-center flex'>
          <MicIcon />
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <VideoCallIcon />
        <NotificationsIcon />
        <AccountCircleIcon />
      </div>


    </div>
  )
}

export default Header