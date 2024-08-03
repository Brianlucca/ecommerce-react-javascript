import React, { useEffect, useState } from "react";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const slides = [
    {
      id: 1,
      src: "https://th.bing.com/th/id/R.a03f1028a56b20adcdf832f35c5bbda6?rik=vDa39%2fzw7HArdw&pid=ImgRaw&r=0",
      alt: "Slide 1",
    },
    {
      id: 2,
      src: "https://conteudo.imguol.com.br/c/especiais/start/2020/xbox-series/capa-a.jpg",
      alt: "Slide 2",
    },
    {
      id: 3,
      src: "https://th.bing.com/th/id/R.0276eee266574cae37fed0584cdfa652?rik=CrKTae%2fHeYiycg&pid=ImgRaw&r=0",
      alt: "Slide 3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex >= slides.length ? 1 : prevIndex + 1,
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <section className="mx-auto" aria-label="Slideshow" role="region">
      <div className="relative h-96 w-full">
        {slides.map((slide, index) => (
          <figure
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              slideIndex === index + 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              className="w-full h-full object-cover"
              src={slide.src}
              alt={slide.alt}
            />
          </figure>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`h-3 w-3 rounded-full bg-gray-300 ${
                slideIndex === index + 1 ? "bg-gray-800" : ""
              }`}
              onClick={() => currentSlide(index + 1)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
