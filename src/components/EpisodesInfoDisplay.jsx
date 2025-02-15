import React from 'react'
import { CardGalaxy } from '../mui-treasury/card-galaxy/CardGalaxy'

const EpisodesInfoDisplay = () => {
    return (
        <div className='w-full h-80 bg-eutral-950/80'>
            <div className='inline-flex items-center'>
                <div className='w-1 h-6 bg-[#DC143C] translate-x-6 translate-y-1'></div>
                <h2 className='text-white font-semibold text-[1.3rem] md:text-[1.6rem] ml-7 pt-2'>
                    Lucifer: S7
                </h2>
            </div>

            {/* <div className='w-16 h-[2.5px] rounded-full bg-[#DC143C] translate-x-[3.1rem] -translate-y-0.5'></div> */}

            <div className='ml-6 pt-5'>
                <CardGalaxy />
            </div>
        </div>
    )
}

export default EpisodesInfoDisplay
