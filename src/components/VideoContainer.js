import React, { useEffect} from 'react'
import VideoCard from "./VideoCard"
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux'
import { OpenMenu } from '../utils/appSlice';
import { addVideo } from '../utils/videoSlice';

const VideoContainer = () => {
  const dispatch = useDispatch()

  const video = useSelector(store => store.video.videoList)

  useEffect(() => {
     
    if (!video || video.length === 0) {
      GetVideos();
    }
    

    dispatch(OpenMenu())
  }, []);

  const GetVideos = async () => {
   try{ const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(addVideo(json?.items))}
    catch(err){
      console.error("ERROR fetching video:",err)
    }
  }


  return (
    <div className='flex flex-wrap'>
      {video?.length > 0 && (video.map((videos) => (
        <VideoCard key={videos?.etag} info={videos} />
      )))}
    </div>
  )
}

export default VideoContainer