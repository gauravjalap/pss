// src/components/ImageCarousel.jsx
import React, { useState, useEffect } from "react";
import school1 from "../../assets/images/school1.jpg";
import school2 from "../../assets/images/school2.jpg";
import c1 from "../../assets/images/c1.png";
import c2 from "../../assets/images/c2.png";
import c3 from "../../assets/images/c3.png";
import c4 from "../../assets/images/c4.jpg";
import Quote from "./Quote";
const images = [school1, school2, c1, c2, c3, c4];
const quote = [
  {
    description:
      "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
  },
  {
    description:
      "The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education.",
    author: "Martin Luther King Jr.",
  },
  {
    description:
      "Children are the world's most valuable resource and its best hope for the future.",
    author: "John F. Kennedy",
  },
  {
    description:
      "Service to others is the rent you pay for your room here on earth.",
    author: "Muhammad Ali",
  },
  {
    description: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
  },
  {
    description: "Education is the key to unlock the golden door of freedom.",
    author: "George Washington Carver",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-64 object-cover filter brightness-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Quote
            author={quote[currentIndex].author}
            description={quote[currentIndex].description}
          />
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 hidden left-0 transform -translate-y-1/2 bg-gray-800 text-white m-2 p-2 text-sm rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 hidden right-0 transform -translate-y-1/2 bg-gray-800 text-white m-2 p-2 text-sm rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
