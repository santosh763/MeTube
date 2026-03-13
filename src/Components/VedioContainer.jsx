import React, { useEffect, useState } from 'react'
import VedioCard,{AdVedioCard} from './VedioCard'
import { YOUTUBE_VEDIO_API } from '../utils/constans';
import { Link } from 'react-router-dom';

const VedioContainer = () => {
  const [videoData, setVideoData] = useState([])
  useEffect(() => {
    getMeTubeVedios();
  }, [])

  const getMeTubeVedios = async () => {
    const data = await fetch(YOUTUBE_VEDIO_API)
    const json = await data.json()
    setVideoData(json?.items)
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full'>
      {videoData.map((item) => (
        <Link to={"/watch?v="+item.id} key={item.id} className="flex justify-center"> <VedioCard videoData={item} /></Link>
      ))}
    </div>
  )
}

export default VedioContainer