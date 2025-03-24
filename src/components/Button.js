import React from 'react'
import { useDispatch } from 'react-redux';
import {addVideo} from "../utils/videoSlice"
import { YOUTUBE_SEARCH_VIDEO_API } from '../utils/constants';

const Button = ({name}) => {
  const dispatch =useDispatch();
   const handleSuggestion = async (s) => {
   try{ const responce = await fetch(YOUTUBE_SEARCH_VIDEO_API + s);
    const result = await responce.json();

    dispatch(addVideo(result?.items));}
  catch(err){
    console.error("Error fetching while click on button", err)
  }}
  return (
    <div>
        <div>
            <button onClick={()=>handleSuggestion(name)} className='m-2 px-3 py-1 rounded-lg bg-gray-100'>{name}</button>
        </div>
    </div>
  )
}

export default Button