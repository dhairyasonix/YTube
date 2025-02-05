import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({ info }) => {
  if (info === undefined && null) return null;
  const { snippet, statistics, id } = info;
  
  // const { title, thumbnails } = snippet;
  const videoId = typeof info.id === "object" ? info.id.videoId || info.id.channelID : info.id;

  return (<Link className='w-[23.5%]' to={"/watch?v=" + videoId} >
    <div className='m-2 p-2 shadow-md'>
      <div>
        <img className='rounded-lg mx-auto' src={snippet?.thumbnails?.medium?.url} alt='tumbnail' />
      </div>
      <div>
        <h1 className='font-bold'>{snippet?.title}</h1>
        <ul className='flex justify-between'>
          <li> {statistics?.likeCount} Likes</li>
          <li>{statistics?.viewCount} Views</li>
        </ul>
      </div>
    </div> </Link>
  )
}

export default VideoCard;