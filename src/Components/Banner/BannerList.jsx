import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const BannerList = ({ poster, title, date, overView, name, movieId }) => {
  return (
    <div
      id="box-banner"
      className={`relative min-w-full h-full ${poster ? "block" : "hidden"} scroll-smooth overflow-hidden rounded-md snap-center hover:border-[4px] border-gray-300 duration-150 ease-in-out`}
    >
      <img
        className="w-full h-full object-cover object-left-top relative"
        src={`${poster}`}
      />

      {/* --------------------INFO MOVIE--------------------- */}
      <div className="absolute top-[50%] w-[100%] rsm:w-[80%] md:w-[70%] translate-y-[-50%] left-0 text-white pl-[8%] z-[10]">
        <h2 className="text-[2em] md:text-[2.5em] lg:text-[3em] font-bold">
          {title ? title : name}
        </h2>
        <p className="mt-[0] rsm:mt-[-5px] text-[10px] rsm:text-[13px] md:text-[14px] lg:text-[15px] text-[#cacaca]">
          {date}
        </p>

        <p className="mt-[7px] font-semibold hidden rsm:block rsm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[17px] text-[#e1e1e1]">
          {overView}
        </p>

        <div className="flex gap-4 mt-[15px] rsm:mt-[25px]">
          <Link to={`/more-info/${movieId}`}>
            <button className="px-[15px] p-[2px] rsm:py-[3px] lg:py-[5px] bg-white text-black flex font-bold text-[10px] rsm:text-[13px] items-center rounded-[5px] hover:scale-90 duration-50">
              <FaPlay className="text-[13px] rsm:text-[15px] mr-[5px]" /> Play
            </button>
          </Link>

          <Link to={`/more-info/${movieId}`}>
            <button className="px-[15px] py-[2px] rsm:py-[3px] lg:py-[5px] bg-[#585858] text-white flex font-bold text-[10px] rsm:text-[13px] items-center rounded-[5px] hover:scale-95 duration-50">
              <IoMdInformationCircleOutline className="text-[18px] rsm:text-[15px] mr-[5px]" />
              More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerList;
