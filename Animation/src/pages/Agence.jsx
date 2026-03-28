import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

import camille from '../assets/Agency_photos/CAMILLE_480X640_2.jpg'
import carl from '../assets/Agency_photos/Carl_480x640.jpg'
import chantal from '../assets/Agency_photos/ChantalG_480x640.jpg'
import joel from '../assets/Agency_photos/joel_480X640_3.jpg'
import meggie from '../assets/Agency_photos/MEGGIE_480X640_2.jpg'
import mel from '../assets/Agency_photos/MEL_480X640.jpg'
import michele from '../assets/Agency_photos/Michele_480X640.jpg'
import myself from '../assets/Agency_photos/MySelf.jpeg'
import olivier from '../assets/Agency_photos/Olivier_480x640.jpg'


const Agence = () => {
  
  const imgdivref = useRef(null)
  const imgref = useRef(null)

  const imgarr = [
    myself,
    camille,
    carl,
    chantal,
    joel,
    meggie,
    mel,
    michele,
    olivier
]


  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {
  gsap.to(imgdivref.current, {
    scrollTrigger: {
      trigger: imgdivref.current,
      start: 'top 24%',
      end: 'top -140%',
      // scrub: true,
      pin: true,
      markers: true,
      onUpdate:function(elem){
        let imgIdx;
        imgIdx = Math.round(elem.progress * imgarr.length *1.1)
        // console.log(Math.round(elem.progress * imgarr.length *1.2))
        imgref.current.src = imgarr[imgIdx]
      }
    }
  })
}, [])

  return (
    <div className='relative'>

      <div ref={imgdivref} className='absolute h-[20vw] w-[15vw] -top-[15vw] rounded-3xl left-[30vw] overflow-hidden object-cover'>
          <img ref={imgref} src={myself} alt="images" />
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