import React, { useEffect, useRef, useState } from "react";
const IMGBaseURL = "https://image.tmdb.org/t/p/original/";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BannerList from "./BannerList";

const screen = window.innerWidth - 110;

const Banner = ({ API }) => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  function getTrendingMovies() {
    API.then((resp) => {
      setBanner(resp.data.results);
      console.log(resp.data.results);
    });
  }

  const elementRef = useRef([]);
  function slideRight(event) {
    event.scrollLeft += screen;
  }
  function slideLeft(event) {
    event.scrollLeft -= screen;
  }

  return (
    <div className="relative w-full pt-[70px] text-white">
      <FaChevronLeft
        onClick={() => slideLeft(elementRef.current)}
        className="md:block hidden absolute top-[50%] ml-8 cursor-pointer z-30 text-[25px]"
      />

      <FaChevronRight
        onClick={() => slideRight(elementRef.current)}
        className="md:block hidden absolute right-0 top-[49%] mr-8 cursor-pointer z-30 text-[25px]"
      />

      <div
        ref={elementRef}
        id="scrollBar"
        className="flex overflow-x-auto lg:h-[540px] scrollbar-hide relative gap-8 px-8 md:px-16 scroll-smooth snap-x snap-mandatory"
      >
        {banner.map((item, index) => (
            <BannerList
              key={index}
              poster={IMGBaseURL + item.backdrop_path}
              title={item.title}
              name={item.name}
              date={item.release_date}
              overView={item.overview}
              movieId={item.id}
            />
        ))}
      </div>
    </div>
  );
};

export default Banner;
