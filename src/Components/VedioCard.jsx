import React from 'react'

const VedioCard = (props) => {
  function formatViews(views) {
    if (views >= 1_000_000_000) {
        return (views / 1_000_000_000).toFixed(1) + 'B';
    } else if (views >= 1_000_000) {
        return (views / 1_000_000).toFixed(1) + 'M';
    } else if (views >= 1_000) {
        return (views / 1_000).toFixed(1) + 'K';
    } else {
        return views?.toString();
    }
}
const formatedTime=(publishedDate)=>{
  const date = new Date(publishedDate);
  const today = new Date();
  
  const diffInMilliseconds = today - date;
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);
  
  let difference;
  if (diffInYears > 0) {
      difference = `${diffInYears} year${diffInYears > 1 ? 's' : ''}`;
  } else if (diffInMonths > 0) {
      difference = `${diffInMonths} month${diffInMonths > 1 ? 's' : ''}`;
  } else {
      difference = `${diffInDays} day${diffInDays > 1 ? 's' : ''}`;
  }
  return difference
}

  return (
    <div className='flex flex-col w-[250px]'>
    <div className='w-full rounded-md'>
      
      <img src={props?.videoData?.snippet?.thumbnails?.high?.url} alt='' className='w-full h-[150px] rounded-md'/>
    </div>
    <div className='flex '>
    <div className='avtar'>
      <img src='' alt=' '/>
    </div>
    <div>
      <p className='w-full flex-row overflow-ellipsis'>{props?.videoData?.snippet?.title}</p>
      <p>{props?.videoData?.snippet?.channelTitle}</p>
      <p>{`${formatViews(props?.videoData?.statistics?.viewCount)} views  ${formatedTime(props?.videoData?.snippet?.publishedAt)} ago `}</p>
    </div>
    </div>
    </div>

  )
}

export const AdVedioCard =(props)=>{
  return (
    <div className='border border-red-600 p-1'>
      <VedioCard videoData={props?.videoData}/>
    </div>
  )
}

export default VedioCard