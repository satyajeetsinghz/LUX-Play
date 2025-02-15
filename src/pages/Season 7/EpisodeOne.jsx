import React from 'react'
import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'
import EpisodeStory from '../../components/EpisodeStory'
import LuciferEpisodeStory from '../../components/EpisodeStory'

const EpisodeOne = () => {
    return (
        <div className="min-h-screen w-full bg-[url('/img/lucifer_background.jpg')] bg-cover bg-center text-host-grotesk-body">
            {/* <Navbar /> */}
            <div className='grid place-items-center h-screen'>
                {/* <div className='w-[85rem] h-[10rem] bg-zinc-800/50'>
                    
                </div> */}
                <LuciferEpisodeStory />
            </div>
        </div>
    )
}

export default EpisodeOne
