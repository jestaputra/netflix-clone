import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const FilmLists = ({ API, imageURL }) => {
  const elementRef = useRef([]);
  const [tvLists, setTvLists] = useState([]);
  useEffect(() => {
    getSeriesByGenre();
  }, []);

  function getSeriesByGenre() {
    API.then((response) => {
      setTvLists(response.data.results);
      console.log(response.data.results);
    });
  }

  function handleNext(event) {
    event.scrollLeft += 855;
  }
  function handlePrev(event) {
    event.scrollLeft -= 855;
  }

  return (
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
        {tvLists.map((item, index) => (
          <div
            id="listMovie"
            key={index}
            className={`min-w-[250px] relative py-4 ${
              item.backdrop_path ? "block" : "hidden"
            }`}
          >
            <Link to={`/more-info/${item.id}`}>
              <img
                className="w-full hover:border-[4px] hover:scale-110 duration-200 ease-in-out border-white  cursor-pointer rounded-md"
                src={`${imageURL + item.backdrop_path}`}
              />
            </Link>
            <h2 className="mt-[-40px] ml-2 absolute font-mono font-semibold text-white ">
              {item.original_name ? item.original_name : item.original_title}
            </h2>
          </div>
        ))}
      </div>
      <FaChevronRight
        onClick={() => handleNext(elementRef.current)}
        className="cursor-pointer hidden md:block text-white absolute mr-2 right-0 text-[25px] top-[70px]"
      />
    </div>
  );
};

export default FilmLists;
