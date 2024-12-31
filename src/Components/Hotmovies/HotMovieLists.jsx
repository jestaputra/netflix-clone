import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotMovieLists = ({ API, imgURL, title }) => {
  const [movieLists, setMovieLists] = useState([]);
  const elementRef = useRef([]);

  useEffect(() => {
    getMovie();
  });

  function getMovie() {
    API.then((resp) => {
      setMovieLists(resp.data.results);
    });
  }

  function handleNext(event) {
    event.scrollLeft += 855;
  }
  function handlePrev(event) {
    event.scrollLeft -= 855;
  }

  return (
    <div className="mt-8">
      <h2 className="text-white text-[20px] font-semibold ">{title}</h2>
      <div className=" flex w-full justify-between relative">
        <FaChevronLeft
          onClick={() => handlePrev(elementRef.current)}
          className="text-white hidden md:block cursor-pointer absolute left-0 ml-2 z-10 text-[25px] top-[70px]"
        />
        <div
          ref={elementRef}
          id="scrollBar"
          className="flex gap-[35px] overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {movieLists.map((item, index) => (
            <div
              id="listMovie"
              key={index}
              className={`min-w-[250px] relative py-6 ${
                item.backdrop_path ? "block" : "hidden"
              }`}
            >
              <Link to={`/more-info/${item.id}`}>
                <img
                  className="w-full cursor-pointer hover:border-[4px] border-white hover:scale-110 duration-200 ease-in-out rounded-md"
                  src={`${imgURL + item.backdrop_path}`}
                />
              </Link>
              <h2 className="mt-[-40px] ml-2 absolute font-mono font-semibold text-white ">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
        <FaChevronRight
          onClick={() => handleNext(elementRef.current)}
          className="cursor-pointer hidden md:block text-white absolute mr-2 right-0 text-[25px] top-[70px]"
        />
      </div>
    </div>
  );
};

export default HotMovieLists;
