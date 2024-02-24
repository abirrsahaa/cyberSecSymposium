import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "../src/App.css";
import imageOne from "../src/assets/ctf.png";
import imageTwo from "../src/assets/image_2023-10-06_015803021.png";
import imageThree from "../src/assets/image_2023-10-11_000806407.png";
import imageFour from "../src/assets/image_2023-10-11_001645565.png";

const slides = [
  {
    tagline: "FEATURED EVENT",
    heading1: "12 - Hr : CAPTURE THE FLAG",
    heading2: "12 NOV 2023",
    image: imageOne,
  },
  {
    tagline: "FEATURED EVENT",
    heading1: "12 - Hr : CAPTURE THE FLAG",
    heading2: "12 NOV 2023",
    image: imageTwo,
  },
  {
    tagline: "FEATURED EVENT",
    heading1: "12 - Hr : CAPTURE THE FLAG",
    heading2: "12 NOV 2023",
    image: imageTwo,
  },
  {
    tagline: "FEATURED EVENT",
    heading1: "12 - Hr : CAPTURE THE FLAG",
    heading2: "12 NOV 2023",
    image: imageFour,
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative commonFontLight h-90vh p-2 overflow-hidden"> {/* Set a fixed height and hide overflow */}
      <div className="w-full flex transition-all duration-500">
        <div className="w-1/2 flex items-start justify-start p-10 bg-[#101a24]">
          <div className="text-left pl-10">
            <div className="tagline-container border border-[#13d1b2] w-max pr-2 pl-2">
              <h2 className="text-[#13d1b2] text-center text-xl  p-0">
                {currentSlide.tagline}
              </h2>
            </div>
            <br />
            <h2 className="text-[9rem] font-semibold text-white">
              {currentSlide.heading1}
            </h2>
            <br />
            <h3 className="text-4xl text-white">{currentSlide.heading2}</h3>
            <br />
          </div>
        </div>
        <div className="w-1/2 bg-[#101a24] slideImageBG">
          <img
            src={currentSlide.image}
            alt="Slider Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        onClick={prevSlide}
      >
        <BsChevronLeft size={30} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        onClick={nextSlide}
      >
        <BsChevronRight size={30} />
      </button>
    </div>
  );
};

export default Slider;
