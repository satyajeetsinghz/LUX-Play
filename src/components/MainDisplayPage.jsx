import React from 'react'
import Navbar from './Navbar'
import MovieInfoDisplay from './MovieInfoDisplay'
import EpisodesInfoDisplay from './EpisodesInfoDisplay'

const MainDisplayPage = () => {
    return (
        <div className="min-h-screen w-full bg-[url('/img/lucifer_background.jpg')] bg-cover bg-center atkinson-hyperlegible-next">
            <Navbar />
            <div className="flex justify-center items-center my-12">
                <MovieInfoDisplay />
            </div>

            <div>
                <EpisodesInfoDisplay />
            </div>
        </div>
    )
}

export default MainDisplayPage
