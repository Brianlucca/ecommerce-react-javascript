import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div className="w-full flex-shrink-0">{child}</div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 rounded-md text-gray-800 px-3 py-2"
        onClick={prevSlide}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 rounded-md text-gray-800 px-3 py-2"
        onClick={nextSlide}
      >
        <ChevronRight />
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mb-4">
        {React.Children.map(children, (child, index) => (
          <button
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
