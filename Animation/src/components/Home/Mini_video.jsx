import React from 'react'
import home_video from '../../assets/home_video.mp4'

const Mini_video = () => {
  return (
    <div className='rounded-full overflow-hidden object-cover  w-[16vw] h-[8vw]'>
        <video autoPlay loop muted src={home_video}></video>
    </div>
  )
}

export default Mini_video