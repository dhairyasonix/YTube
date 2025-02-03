import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenue } from '../utils/appSlice'
import { cros_URL, YOUTUBE_SEARCH_API } from '../utils/constants'



const Head = () => {
    const [serchQuery, setserchQuery] = useState("")
const [suggestion,setsuggestion] = useState([])
    useEffect(() => {
        const timer = setTimeout(() => {
            getSearchSeuggestions()
        }, 100);

        return () => {
            clearTimeout(timer)
        }

    }, [serchQuery]);
    // Target URL from you want to fetch data m ,ex-github api

    const getSearchSeuggestions = async () => {
        const response = await fetch(`${cros_URL}${encodeURIComponent(YOUTUBE_SEARCH_API + serchQuery)}`);//removing cros issue
        const data = await response.json();
       setsuggestion(data[1]);
    };

    const dispatch = useDispatch()
    const toggleMenueHandler = () => {
        dispatch(toggleMenue())
    }
    return (
        <div className=' grid grid-flow-col p-2 mx-2 shadow-md sticky top-0 bg-white'>

            <div className='flex col-span-2 cursor-pointer'>
                <img onClick={() => toggleMenueHandler()} className='h-7 p-1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png' alt='icon' />
                <a href='/'> <img className='h-7 ml-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajxKRUVWIV0I9w84rXo1O_h1jDGxrucgFZQ&s' alt='logo' /></a>



            </div>
            <div className=' flex-col col-span-9'>
                <div className=' ml-52'>
                    <input className='my-1 p-2 h-10 border w-1/2 border-gray-400 rounded-l-full' type='text' value={serchQuery} onChange={(e) => setserchQuery(e.target.value)} />
                    <button className=' px-4 py-2 h-10 border border-gray-400 bg-slate-100 rounded-r-full'>🔍</button>
                </div>
                  <div className='mt-1 absolute ml-52 bg-white w-1/3  shadow-lg rounded-lg border border-slate-200'>
                    <ul>
                    
                    {suggestion &&(suggestion.map(s=><li key={s} className='p-2  shadow-sm hover:bg-gray-100 '>{s}</li>))}
                        
                    </ul>
                </div>
            </div>
            <div className='col-span-1 '>
                <img className='h-7' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s' alt='profile' />
            </div>

        </div>
    )
}

export default Head;