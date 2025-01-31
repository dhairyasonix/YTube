import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({ info }) => {
  if (info === undefined) return null;
  const { snippet, statistics,id } = info;
  // const { title, thumbnails } = snippet;


  return (<Link className='w-[23.5%]' to={"/watch?v="+id} >
    <div className='m-2 p-2 shadow-md'>
      <div>
        <img className='rounded-lg mx-auto' src={snippet?.thumbnails?.medium?.url} alt='tumbnail' />
      </div>
      <div>
        <h1 className='font-bold'>{snippet?.title}</h1>
        <ul className='flex justify-between'>
          <li> {statistics?.likeCount} Likes</li>
          <li>{statistics?.viewCount} Vies</li>
        </ul>
      </div>
    </div> </Link>
  )
}

export default VideoCard;