import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div>
            <div className='px-24 pt-10 '>
            <iframe className='rounded-xl' width="870" height="460" src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?&autoplay=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

        </div>
    )
}

export default WatchPage