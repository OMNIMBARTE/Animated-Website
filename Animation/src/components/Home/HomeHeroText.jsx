import React from 'react'
import Videos from './Videos'

const HomeHeroText = () => {
    return (
        <>
            <div className='font[Font1]  text-white'>
                <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[10vw] text-center'>
                    The spark for
                </div>
                <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[10vw] text-center'>
                    all
                    <div className="w-[11vw] rounded-full overflow-hidden mx-2">
                        <Videos />
                    </div>
                    things
                </div>
                <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[10vw] text-center'>
                    creative
                </div>
            </div>
        </>
    )
}

export default HomeHeroText