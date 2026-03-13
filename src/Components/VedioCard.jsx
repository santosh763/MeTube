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
    <div className='flex flex-col w-[320px] h-[320px] bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200 overflow-hidden border border-gray-100 dark:border-gray-700 group'>
      <div className='w-full aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden'>
        <img src={props?.videoData?.snippet?.thumbnails?.high?.url} alt='' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'/>
      </div>
      <div className='flex gap-3 p-3'>
        <div className='flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tr from-pink-400 via-red-400 to-yellow-400 dark:from-pink-700 dark:via-red-700 dark:to-yellow-600 flex items-center justify-center text-white font-bold text-lg shadow'>
          <span>{props?.videoData?.snippet?.channelTitle?.[0] || 'C'}</span>
        </div>
        <div className='flex flex-col min-w-0'>
          <p className='font-semibold text-gray-900 dark:text-gray-100 truncate'>{props?.videoData?.snippet?.title}</p>
          <p className='text-xs text-gray-600 dark:text-gray-400 truncate'>{props?.videoData?.snippet?.channelTitle}</p>
          <p className='text-xs text-gray-500 dark:text-gray-400'>{`${formatViews(props?.videoData?.statistics?.viewCount)} views  ${formatedTime(props?.videoData?.snippet?.publishedAt)} ago `}</p>
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