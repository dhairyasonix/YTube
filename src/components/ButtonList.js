import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const ButtonNames =["All", "Gaming", "Color", "Music", "Electronics", "Mixes", "Graphic", "Spice", "Technology", "Science", "Vlogs", "Education", "Movies", "Shorts", "Comedy", "Podcasts", "Fitness", "DIY", "Reviews", "Cooking", "Travel", "News", "Fashion", "Sports", "Motivation", "Business", "Photography", "Programming", "History", "ASMR", "Health", "Finance", "Art", "Nature"]
  ;
  return (
    <div className='flex overflow-x-auto scrollbar-hide mt-2 w-[99%]  '>
      {ButtonNames.map((button,index)=><Button key={index} name={button} />)}
    
    </div>
  )
}

export default ButtonList