import React, { useState, useEffect } from "react";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getImageSource = (slide) => {
    return window.innerWidth < 768 ? slide.smallImage : slide.largeImage;
  };
  const getBackgroundSize = () => {
    if (window.innerWidth < 768) {
      return "cover";
    } else {
      return "cover";
    }
  };

  return (
    <div className='relative h-[40vh] md:h-[85vh] overflow-hidden text-white flex flex-col justify-center items-center mt-3 md:mt-8 lg:mt-3'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
            index === currentIndex ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundImage: `url(${getImageSource(slide)})`,
            backgroundSize: getBackgroundSize(),
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className='h-full flex flex-col py-[230px] md:pt-[350px] lg:pt-[400px] text-center justify-center items-center'>
            <h1 className='mb-4 text-xl font-SansSerifExbFLF font-semibold md:text-3xl lg:text-5xl md:font-custom-weight w-[90%] md:w-[1088px]'>
              {slide.heading}
              <span className='hidden md:block'>{slide.subheading}</span>
            </h1>
            <p className='mb-4 text-xs md:text-xl lg:text-2xl font-HelveticaRounded font-bold w-[90%] md:w-[530px]'>
              {slide.description}
            </p>
            <button className='bg-white text-black p-3 text-xs md:text-xl lg:text-2xl font-SansSerifExbFLF font-custom-weight w-[110px] md:w-[300px]'>
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      <div className='absolute  bottom-5 left-1/2 transform -translate-x-1/2 hidden md:flex  space-x-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-5 h-5 rounded-full ${
              index === currentIndex ? "bg-[#4670DC]" : "bg-[#FFFFFF]"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
