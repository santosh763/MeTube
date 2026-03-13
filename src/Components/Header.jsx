import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from '../utils/appSlice';
import { setCacheResults,setSearchKeyWord} from '../utils/searchSlice';


const Header = ({ darkMode, setDarkMode }) => {
  const dispatch = useDispatch()
  const [serchText,setSearchText]=useState("")
  const [suggestion,setSuggestion]=useState([]);
  const [showsuggestion,setShowsuggestion]=useState(false)
  // const [searchKeyword,setSearchKeyword]=useState("")

const cacheResults=useSelector((store)=>store.search.cacheResults)
const searchKeyWord=useSelector((store)=>store.search.searchKeyWord)

  useEffect(()=>{
   const timer= setTimeout(()=>{
    if(cacheResults[serchText]){
      setSuggestion(cacheResults[serchText])
    }else{
      getSerachSuggestion()
    }
  },200)
    
   return()=>{
    clearTimeout(timer)
   }
  },[serchText]);

  const getSerachSuggestion= async()=>{
    const data= await fetch(`http://localhost:8000/api/youtube/v3/search?part=snippet&maxResults=20&q=${serchText}&type=video&key=AIzaSyAxQMuZzfVobS2azLY4mpX7GaTaEjaHlHE`)
    const json =await data.json()
    setSuggestion(json?.[1])

// upatadte the cache
    dispatch(setCacheResults({
      [serchText]:json?.[1] 
    }))
  }
  const handelClick=(keyword)=>{
    // setSearchKeyword(keyword);
    console.log("keyword",keyword);
    dispatch(setSearchKeyWord(keyword))
  }
  // console.log("searchKeyWord",searchKeyWord);
  return (
    <header className="sticky top-0 z-30 w-full bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      {/* Desktop header */}
      <div className="hidden md:flex justify-between items-center px-2 md:px-6 py-2 gap-2">
        <div className='flex gap-3 items-center'>
          <button onClick={() => dispatch(toggleSideBar())} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <MenuIcon className="text-gray-700 dark:text-gray-200" />
          </button>
          <a href="/">
            <div className='flex items-center gap-1 text-xl font-bold text-red-600 dark:text-red-400'>
              <YouTubeIcon fontSize="large" />
              <span className="tracking-tight">MeTube</span>
            </div>
          </a>
        </div>
        <div className='flex gap-3 items-center flex-1 max-w-xl mx-4'>
          <div className='flex flex-col relative w-full'>
            <div className='bg-gray-100 dark:bg-gray-800 rounded-xl gap-1 items-center flex pr-1 border border-gray-300 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-400 w-full'>
              <input
                type='text'
                className='w-full h-9 px-3 rounded-xl bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
                value={serchText}
                onChange={(e)=>{setSearchText(e.target.value)}}
                onFocus={()=>setShowsuggestion(true)}
                onBlur={()=>setShowsuggestion(false)}
                placeholder="Search..."
              />
              <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
                <SearchIcon className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            {showsuggestion &&
              <div className='w-full flex flex-col bg-white dark:bg-gray-800 absolute top-11 left-0 z-[20] p-3 rounded-md shadow-lg border border-gray-200 dark:border-gray-700'>
                { suggestion.length>1 && suggestion?.map((item)=><div key={item} className='mb-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded' >{item}</div>)}
              </div>
            }
          </div>
          <div className='rounded-full w-[36px] h-[36px] bg-gray-200 dark:bg-gray-700 items-center justify-center flex shadow'>
            <MicIcon className="text-gray-700 dark:text-gray-200" />
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <VideoCallIcon className="text-gray-700 dark:text-gray-200" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <NotificationsIcon className="text-gray-700 dark:text-gray-200" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <AccountCircleIcon className="text-gray-700 dark:text-gray-200" />
          </button>
        </div>
        <div className="ml-2">
          <button
            className="rounded-full px-3 py-1 text-xs font-semibold border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setDarkMode((d) => !d)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
      {/* Mobile header */}
      <div className="flex md:hidden items-center justify-between px-2 py-1 gap-1">
        <button onClick={() => dispatch(toggleSideBar())} className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <MenuIcon className="text-gray-700 dark:text-gray-200" fontSize="small" />
        </button>
        <a href="/">
          <div className='flex items-center gap-1 text-lg font-bold text-red-600 dark:text-red-400'>
            <YouTubeIcon fontSize="medium" />
            <span className="tracking-tight">MeTube</span>
          </div>
        </a>
        <div className="flex-1 flex justify-center items-center px-1">
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700 w-full max-w-[180px]">
            <input
              type="text"
              className="w-full h-7 px-2 rounded-full bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-xs"
              value={serchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search..."
            />
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
              <SearchIcon className="text-gray-600 dark:text-gray-300" fontSize="small" />
            </button>
          </div>
        </div>
        <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <AccountCircleIcon className="text-gray-700 dark:text-gray-200" fontSize="small" />
        </button>
      </div>
    </header>
  )
}

export default Header