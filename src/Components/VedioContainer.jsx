import React, { useEffect, useState } from 'react'
import VedioCard from './VedioCard'
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
    <div className='flex flex-wrap gap-7'>
      {}
      {videoData.map((item) => {
        return (
          <Link to={"/watch?v="+item.id} key={item.id} ><VedioCard videoData={item} /></Link>
        )
      })}
    </div>


  )
}

export default VedioContainer