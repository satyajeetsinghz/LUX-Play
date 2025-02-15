import '/src/Episodes/font.css'

const MainCharacters = () => {
    return (
        <div className="text-white noto-sans text">

            <blockquote className="border-l-4 border-red-500 pl-4 mt-2">
                Lucifer Morningstar
            </blockquote>

            <div className='mx-0 sm:mx-16 mt-4 italic'>
                <p>Struggles with his purpose after embracing his role as Hell’s ruler.</p>

                <p>Torn between his duty and the desire to be with Chloe, even if she is beyond his reach.</p>

                <p>Seeks answers about the Dawnless King, a being that was erased from celestial records.</p>

                <p>Reunites with old allies and enemies, including Michael, who may hold crucial knowledge.</p>
            </div>


            <blockquote className="border-l-4 border-red-500 pl-4 mt-12">
                Chloe Decker (Spirit Form)
            </blockquote>

            <div className='mx-0 sm:mx-16 mt-4 italic'>
                <p>Appears to Lucifer in visions, warning him about an impending cosmic event.</p>

                <p>Trapped between the afterlife and reality, trying to communicate with Rory and Lucifer.</p>

                <p>Holds a hidden key that may unravel the <span className='text-indigo-600'>Dawnless King’s</span> origins.</p>
            </div>


            <blockquote className="border-l-4 border-red-500 pl-4 mt-12">
                Mazikeen (Maze)
            </blockquote>

            <div className='mx-0 sm:mx-16 mt-4 italic'>
                <p>Thrives on Earth as a bounty hunter but senses Hell’s shifting energy.</p>

                <p>Reluctantly helps Lucifer, but questions whether he’s truly changed.</p>

                <p>Seeks vengeance against a mysterious force that has been interfering with demonic souls.</p>
            </div>


            <blockquote className="border-l-4 border-red-500 pl-4 mt-12">
                Rory Decker-Morningstar
            </blockquote>

            <div className='mx-0 sm:mx-16 mt-4 italic'>
                <p>Begins having cryptic visions of an ancient celestial war.</p>

                <p>Struggles with her identity as both an angel and Lucifer’s daughter.</p>

                <p>Convinced that the Dawnless King’s return is tied to her destiny.</p>
            </div>


            <blockquote className="border-l-4 border-red-500 pl-4 mt-12">
                Amenadiel (God)
            </blockquote>

            <div className='mx-0 sm:mx-16 mt-4 italic'>
                <p>Balances ruling Heaven while dealing with unexplained celestial anomalies.</p>

                <p>Believes Lucifer’s interference could unravel divine order.</p>

                <p>Torn between his loyalty to his brother and his duty to protect the universe.</p>
            </div>


            <blockquote className="border-l-4 border-red-500 pl-4 mt-12">
                The Dawnless King (New Antagonist)
            </blockquote>

            <div className='mx-0 sm:mx-16 mt-4 italic'>
                <p>An ancient celestial erased from history for attempting to overthrow God.</p>

                <p>Trapped in a void between realms, now seeking revenge against Lucifer and Amenadiel.</p>

                <p>Has the power to manipulate celestial energy, disrupting Heaven, Hell, and Earth.</p>
            </div>
        </div>
    );
};

export default MainCharacters;
