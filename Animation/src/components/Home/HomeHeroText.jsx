import React from 'react'
import Videos from './Videos'
import Minivideo from './Minivideo'


const HomeHeroText = () => {
    return (
        <>
            <div className='font[Font1]  text-white'>
                <div className='text-[10vw] justify-center flex items-center uppercase leading-[8.5vw] text-center'>
                    The spark for
                </div>
                <div className='text-[10vw] flex justify-center items-center uppercase leading-[8.5vw] text-center'>
                    all
                    <div className='w-[12vw] h-[7vw] rounded-full overflow-hidden mx-2'>
                        <Minivideo />
                    </div>
                    things
                </div>
                <div className='text-[10vw] justify-center flex items-center uppercase leading-[8.5vw] text-center'>
                    creative
                </div>
            </div>
        </>
    )
}

export default HomeHeroText