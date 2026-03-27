import React, { useRef } from 'react'
import myself from '../assets/MySelf.jpeg'
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP)

const Agence = () => {

  const imgref = useRef(null)
  useGSAP  

  return (
    <div>

    <div ref={imgref} className='fixed h-[20vw] w-[15vw] rounded-3xl top-40 left-[32vw] overflow-hidden object-cover'>
        <img src={myself} alt="images" />
    </div>



    <div className='relative h-screen font-[Font2]'>

      <div className='mt-[55vh]'>
        <h1  className='text-[20vw] uppercase leading-[18vw] text-center'>
          SEVEN7Y <br />
          TWO</h1>
      </div>
      <div className='pl-[40%]'>
        <p className='text-5xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We are inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
      </div>

    </div>
      
    </div>
  )
}

export default Agence;