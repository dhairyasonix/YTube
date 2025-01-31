import React, { useEffect, useState } from 'react'
import VideoCard from "./VideoCard"
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { useDispatch } from 'react-redux'
import { OpenMenu } from '../utils/appSlice';
const VideoContainer = () => {
  const dispatch =useDispatch()
  const [videos,setvideos] = useState([])
useEffect(()=>{
  GetVideos();
  dispatch(OpenMenu())
},[]);

const GetVideos =async()=>{
const data = await fetch(YOUTUBE_VIDEOS_API);
const json = await data.json();

setvideos(json?.items)
}

  return (
    <div className='flex flex-wrap'>
      {videos.map((videos)=> (
        <VideoCard key={videos.id}info={videos}/> 
        ) )}
    </div>
  )
}

export default VideoContainer