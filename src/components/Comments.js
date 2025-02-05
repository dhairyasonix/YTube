import React, {useState } from 'react'

const Comments = ({items}) => {
    const [readMore, setreadMore] = useState(false)
    if(!items) return null;
    const {authorDisplayName,authorProfileImageUrl,textDisplay} = items?.snippet?.topLevelComment?.snippet;
   
    const toggleReadMore = () => {
        setreadMore(prev => !prev)
      
    }

    return (<div className='my-3'>
        <div className='flex w-[870px] '>
            <img className='w-10 h-10 object-cover rounded-full' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"} alt='profile' />
            <div className='mx-2'>
                <span className='font-bold '>{authorDisplayName}</span>
                <p className={!readMore ? 'max-h-[100px] overflow-hidden' : ''
                }>{textDisplay}</p>
                <button onClick={toggleReadMore} className=' font-bold text-gray-600'>{readMore ? "Show less" : "Read more"}</button>
            </div>
        </div>


    </div>
    )
}

export default Comments