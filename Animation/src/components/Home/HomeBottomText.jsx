import React from 'react'
import { Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[Font2] flex items-center justify-center bg-amber-900'>
      <Link>Projects</Link>
      <Link>Agence</Link>
    </div>
  )
}

export default HomeBottomText