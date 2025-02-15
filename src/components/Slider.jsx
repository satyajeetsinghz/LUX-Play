import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const images = [
    "/img/lucifer_ver9_xxlg.jpg",
    "/img/lucifer_ver9_xxlg.jpg",
    "/img/lucifer_ver9_xxlg.jpg",
    "/img/lucifer_ver9_xxlg.jpg",
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
            <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Lucifer Image"
                className="w-full h-96 object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            />

            {/* Previous Button */}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
                onClick={prevSlide}
            >
                <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
                onClick={nextSlide}
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
