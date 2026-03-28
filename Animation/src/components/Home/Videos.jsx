import React from 'react'
import home_video from '../../assets/home_video.mp4'

const Videos = () => {
  return (
    
      <div className='overflow-hidden'>
          <video className='object-cover overflow-hidden' autoPlay loop muted src={home_video}></video>
      </div>
  )
}

export default Videos