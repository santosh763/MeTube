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


const Header = () => {
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
            onFocus={()=>setShowsuggestion(true)}
            onBlur={()=>setShowsuggestion(false)}
          />
          <SearchIcon />
        </div>
        {showsuggestion &&
        <div className='w-[200px] flex bg-white absolute top-10 z-[20] p-5 rounded-md'>
        
        { suggestion.length>1 && suggestion?.map((item)=><div key={item} className='mb-2 cursor-pointer' >{item}</div>)}
       
        </div>
        }
        
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