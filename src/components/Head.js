import React from 'react'

const Head = () => {
    return (
        <div className=' grid grid-flow-col p-2 m-2 shadow-md'>

            <div className='flex col-span-2'>
                <img className='h-7 p-1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png' alt='icon' />
                <img className='h-7 ml-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajxKRUVWIV0I9w84rXo1O_h1jDGxrucgFZQ&s' alt='logo' />



            </div>
            <div className='col-span-9 ml-52'>
                <input className='my-1 p-2 h-10 border w-1/2 border-gray-400 rounded-l-full' type='text' />
                <button className=' px-4 py-2 h-10 border border-gray-400 bg-slate-100 rounded-r-full'>🔍</button>
            </div>
            <div className='col-span-1 '>
                <img className='h-7' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s' alt='profile' />
            </div>

        </div>
    )
}

export default Head;