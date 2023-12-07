import React from 'react'
import { FaFileAlt } from "react-icons/fa";

const Card = () => {
  return (
   <div className='relative overflow-hidden w-60 h-72 rounded-[21px] bg-zinc-900/90 p-3 text-white'>
    <FaFileAlt />
    <p className='mt-5 text-ml font-semibold'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic iste quisquam!</p>
    <div className='footer absolute left-0 bottom-0 w-full py-4 bg-sky-50'></div>
   </div>
  )
}

export default Card
