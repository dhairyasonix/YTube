import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import { YOUTUBE_COMMENTS } from '../utils/constants';

const WatchPage = () => {
    const [commentList, setcommentList] = useState([])
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(closeMenu())
        getComments()
    }, [])

    const getComments = async () => {
        const data = await fetch(YOUTUBE_COMMENTS + searchParams.get("v"));
        const json = await data.json();
        setcommentList(json?.items)
        
    }

    return (
        <div className='px-24'>
            <div className=' pt-10 '>
                <iframe className='rounded-xl' width="870" height="460" src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?&autoplay=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div>
                {commentList.map(comment=><Comments key={comment.id} items={comment}/>)}
                <Comments items={commentList[0]}/>
                <Comments />
                <Comments />
            </div>

        </div>
    )
}

export default WatchPage