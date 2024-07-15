import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeSlideBar } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams()
  useEffect(() => {
    dispatch(closeSlideBar("true"))
  }, [])
  useEffect(() => {
    return () => {
      dispatch(closeSlideBar("false"))
    }

  }, [])

  return (
    <div>
      <iframe 
      width="560" 
      height="315" 
      src={"https://www.youtube.com/embed/"+searchParam.get("v") }
      title="YouTube video player"
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin" 
       allowFullScreen>
        
       </iframe>
    </div>
  )
}

export default WatchPage