import { useState, useEffect, Fragment } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
export const Carousel = ({ data }) => {
  const [slides, setSlides] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Fragment>
      <div className="relative w-full h-[450px] group">
        <Link to={`/articles/${slides[currentIndex]._id}`}>
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].image.replace(
                "/upload/",
                "/upload/q_60/"
              )})`,
            }}
            className="w-full h-full rounded-xl bg-center bg-cover duration-500 ease-in-out"
          ></div>
          <div className="flex items-center justify-center h-[150px] absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black to-transparent rounded-b-xl w-full">
            <p className="text-center text-3xl">{slides[currentIndex].title}</p>
          </div>
        </Link>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex  justify-center">
        {slides &&
          slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-3xl cursor-pointer ${
                currentIndex == slideIndex ? "text-[#1dbc40]" : "text-[#B8B8B8]"
              } `}
            >
              <RxDotFilled />
            </div>
          ))}
      </div>
    </Fragment>
  );
};
