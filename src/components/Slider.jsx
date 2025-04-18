import React, { useState, useCallback, useEffect } from "react";

const Slider = ({
  slides = [],
  containerClassName = "relative w-full min-h-[500px] md:h-screen overflow-hidden",
  slideClassName = "w-full h-full flex-shrink-0 relative",
  imageClassName = "w-full h-full object-cover",
  contentClassName = "absolute top-1/2 left-4 md:left-20 transform -translate-y-1/2 text-white max-w-md",
  buttonClassName = "inline-block bg-[#2DC071] px-10 py-4 rounded text-white font-semibold hover:bg-[#23856D] transition-all duration-300",
  showIndicators = true,
  showNavigation = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [isTransitioning, slides.length]);

  const goToPreviousSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [isTransitioning, slides.length]);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
    },
    [isTransitioning]
  );

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      goToNextSlide();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, goToNextSlide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className={containerClassName}>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={slideClassName}>
            <img
              src={slide.image}
              alt={slide.altText || `${slide.title} - ${slide.subtitle}`}
              className={imageClassName}
              loading="lazy"
            />

            <div className={contentClassName}>
              {slide.subtitle && (
                <h5 className="text-md md:text-lg font-semibold mb-2 uppercase tracking-widest">
                  {slide.subtitle}
                </h5>
              )}
              {slide.title && (
                <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-4">
                  {slide.title}
                </h1>
              )}
              {slide.description && (
                <p className="text-base md:text-lg mb-6">
                  {slide.description}
                </p>
              )}
              {slide.buttonText && (
                <a href={slide.buttonLink || "#"} className={buttonClassName}>
                  {slide.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {showNavigation && (
        <>
          <button
            onClick={goToPreviousSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <svg
              className="w-8 h-8 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-colors duration-300"
            aria-label="Next slide"
          >
            <svg
              className="w-8 h-8 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;

