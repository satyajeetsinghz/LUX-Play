import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-transparent'>
      <div className='flex justify-between items-center'>
        <div className='ml-14 my-4'>
            <h1 className='text-xl text-white font-semibold '>LUX PLAY</h1>
        </div>
        <div className='mr-[3rem] md:mr-[5rem] my-4'>
            <button className='py-1 px-6 rounded-full border-2 border-dashed hover:bg-[#fafafa] text-sm text-[#fefefe] hover:text-[#222] font-semibold'>Premium</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
