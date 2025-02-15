import '/src/Episodes/font.css'

const StoryView = () => {
    return (
        <div className="text-white noto-sans">
            {/* <h2 className="text-xl font-bold text-red-500 mb-4">Story View</h2> */}
            <p className="mb-4">
                <blockquote className="italic border-l-4 border-red-500 pl-4 mt-2">
                    After ruling Hell for centuries, Lucifer Morningstar believed his fate was sealed. But a powerful celestial disturbance threatens both Heaven and Hell, forcing him back to Earth. Meanwhile, Rory begins experiencing visions of a new adversary—the Dawnless King, an ancient entity erased from celestial history. Chloe, now residing in the afterlife, reaches out to Lucifer in cryptic visions, warning him of an approaching reckoning.
                </blockquote>
            </p>
            <p className="mb-4">
                But a powerful celestial disturbance threatens both Heaven and Hell, forcing him back to Earth.
            </p>
            <p className="italic text-gray-300">
                Meanwhile, Rory begins experiencing visions of a new adversary — <span className="text-indigo-600"> The Dawnless King</span>.
            </p>
        </div>
    );
};

export default StoryView;
