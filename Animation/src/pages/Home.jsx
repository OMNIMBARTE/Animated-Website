import React from 'react'

import Video from '../components/Home/Videos'
import HomeHeroText from '../components/Home/HomeHeroText';
import HomeBottomText from '../components/Home/HomeBottomText'


const Home = () => {
  return (
    <>
    <div className=' text-white'>
      <div className='h-screen w-screen fixed'>
          <Video />
      </div>

      <div className='h-screen w-screen relative flex justify-between flex-col'>
      <HomeHeroText />
      <HomeBottomText />
      </div>
    </div>

    </>
  )

}

export default Home;