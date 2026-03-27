import React from 'react'
import { Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[Font2] flex items-center justify-center gap-4'>
      <Link className='hover:border-[#D3FD50] hover:text-[#D3FD50] text-[5vw] leading-tight uppercase rounded-full px-6 pt-1 pb-0 mb-2 border-white border-3' to='./project'>Projects</Link>
      <Link className='hover:border-[#D3FD50] hover:text-[#D3FD50] text-[5vw] leading-tight uppercase rounded-full px-6 pt-1 pb-0 mb-2 border-white border-3' to='/agence'>Agency</Link>
    </div>
  )
}

export default HomeBottomText