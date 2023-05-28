import React from 'react'
import { notfound } from '../../assets/image'

const NotFound = () => {
  return (
    <div className=' flex flex-col justify-center items-center w-full rounded-lg h-[400px] bg-gray-100 shadow-emerald-200 border mt-16'>
        <span className='py-4 text-4xl font-bold font-sans text-emerald-500'>{" ! Not Found ... "}</span>
        <img src={notfound} alt="notfound" className='w-96 h-60'/>
    </div>
  )
}

export default NotFound