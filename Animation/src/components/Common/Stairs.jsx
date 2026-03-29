import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import { useLocation } from 'react-router-dom'
import { useRef } from 'react'


const Stairs = (props) => {

    const currentpath = useLocation().pathname;
    const stairparentref = useRef(null);
    const pageRef = useRef(null);

    useGSAP(function(){
        const tl = gsap.timeline();
        tl.to(stairparentref.current,{
            display: 'block'
        })
        tl.from('.stair',{
            height:0,
            stagger:{
                amount: -0.25
            }
        })


        tl.from(pageRef.current,{
            opacity:0,
            delay:0.05
        })

        
        tl.to('.stair',{
            y:'100%',
            stagger:{
                amount: -0.25
            }
        })
        tl.to(stairparentref.current,{
            display:'none'
        })
        tl.to('.stair',{
            y:'0%'
        })

        

    },[currentpath]);

  return (

    <div>
        <div ref={stairparentref} className='h-screen w-full fixed z-20 top-0'>

            <div className='h-full w-full flex'>
                <div className="stair w-1/5 bg-gray-800 h-full"></div>
                <div className="stair w-1/5 bg-gray-800 h-full"></div>
                <div className="stair w-1/5 bg-gray-800 h-full"></div>
                <div className="stair w-1/5 bg-gray-800 h-full"></div>
                <div className="stair w-1/5 bg-gray-800 h-full"></div>
            </div>
        </div>


        <div ref={pageRef}>
            {props.children}
        </div>
    </div>
  )
}

export default Stairs