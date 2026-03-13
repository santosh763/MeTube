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
    <div className="flex justify-center items-center w-full min-h-[60vh] bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
        <iframe
          className="w-full h-full"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default WatchPage