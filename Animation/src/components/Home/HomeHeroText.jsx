import React from 'react'
import Videos from './Videos'
import Minivideo from './Mini_video'


const HomeHeroText = () => {
    return (
        <>
            <div className='font[Font1] text-white mt-1.5'>
                <div className='text-[10vw] justify-center flex items-center uppercase leading-[7.5vw] text-center'>
                    The spark for
                </div>
                <div className='text-[10vw] flex justify-center items-center uppercase leading-[7.5vw] text-center'>
                    all
                    <div className='overflow-hidden rounded-full mt-5 pt-0'>
                        <Minivideo />
                    </div>
                    things
                </div>
                <div className='text-[10vw] justify-center flex items-center uppercase leading-[7.5vw] text-center'>
                    creative
                </div>
            </div>
        </>
    )
}

export default HomeHeroText