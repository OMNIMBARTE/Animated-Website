import React from 'react'
import { useRef } from 'react'


const Navbar = () => {

    const navGreenRef = useRef(null);
    const line1Ref = useRef(null)
    const line2Ref = useRef(null)
    const line3Ref = useRef(null)

  return (

    <div className='z-40  flex fixed top-0 items-start justify-between w-full'>
        
        <div className='p-2.5 w-[9vw] h-[4.5vw]'>
            <svg className='w-full h-full'
                xmlns="http://www.w3.org/2000/svg"viewBox="0 0 103 44"
            >
                <path
                    fill='white'
                    fillRule="evenodd"
                    d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,0 L35.1441047,0 Z 
                    M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 
                    L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z 
                    M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 
                    L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 
                    L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 
                    L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 
                    L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 
                    L102.80937,0.000691099476 L72.5255345,0.000691099476 Z 
                    M0,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 
                    L0,0.0057591623 Z 
                    M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 
                    L67.9877996,8.4486911 L58.6849955,8.4486911 Z 
                    M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 
                    L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                />
            </svg>

        </div>


        <div 
            className='h-12 w-[16vw] relative bg-black'
            onMouseEnter={()=>{
                navGreenRef.current.style.height = '100%'
                line1Ref.current.style.backgroundColor = '#000'
                line2Ref.current.style.backgroundColor = '#000'
                line3Ref.current.style.backgroundColor = '#000'
            }}
            onMouseLeave={()=>{
                navGreenRef.current.style.height = '0%'
                line1Ref.current.style.backgroundColor = '#fff'
                line2Ref.current.style.backgroundColor = '#fff'
                line3Ref.current.style.backgroundColor = '#fff'
            }}

        >
            <div ref={navGreenRef} className='bg-[#D3FD50] h-0 top-0 transition-all duration-300 absolute w-full'>
                <div className="flex flex-col gap-0.5 items-end pt-5 pr-8">
                    <div ref={line1Ref} className="w-20 h-0.5 bg-white"></div>
                    <div ref={line2Ref} className="w-0 h-0.5 bg-white"></div>
                    <div ref={line3Ref} className="w-8 h-0.5 bg-white"></div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Navbar