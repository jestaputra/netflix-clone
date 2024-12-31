import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import GlobalApi from "./Service/GlobalApi"
import { Link, useParams } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
const IMGBaseURL = "https://image.tmdb.org/t/p/original/";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SideBar from "./Components/SideBar";

const MoreInfoPage = () => {
  const { id } = useParams();

  const [videos, setVideos] = useState("");
  const [details, setDetails] = useState("");
  const [genres, setGenres] = useState([]);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    GlobalApi.getVideos(id, "movie").then((response) => {
      setVideos(response.data.results[0]);
    });

    GlobalApi.getVideos(id, "tv").then((response) => {
      setVideos(response.data.results[0]);
    });

    GlobalApi.getDetails(id, "movie").then((response) => {
      setDetails(response.data);
      setGenres(response.data.genres);
      console.log(response.data);
    });

    GlobalApi.getDetails(id, "tv").then((response) => {
      setDetails(response.data);
      setGenres(response.data.genres);
      console.log(response);
    });

    GlobalApi.Similar(id, "tv").then((response) => {
      setSimilar(response.data.results);
    });

    GlobalApi.Similar(id, "movie").then((response) => {
      setSimilar(response.data.results);
    });
  }

  const elementRef = useRef([]);

  function handleNext(event) {
    event.scrollLeft += 855;
  }
  function handlePrev(event) {
    event.scrollLeft -= 855;
  }

  const [showAddMenu, setShowAddMenu] = useState(false);
    const handleShowAddMenu = () => {
      setShowAddMenu(!showAddMenu ? true : false);
    };

  return (
    <div className="relative">
      <SideBar showAddMenu={showAddMenu} />
      <Navbar
        handleShowAddMenu={handleShowAddMenu}
        showAddMenu={showAddMenu}
        search="hidden"
      />
      <div className="pt-8 min-h-screen relative">
        {videos ? 
        (
        <>
        <iframe
          className="relative px-6 md:px-16 top-[50px] w-full min-h-[50vh] lg:min-h-[80vh]"
          src={`https://www.youtube.com/embed/${videos.key}`}
          allowFullScreen
        ></iframe>
        <div className="flex px-6 md:px-16 items-center justify-between flex-col lg:flex-row mt-[120px] mb-[30px]">
          <div className="basis-[50%]">
            <img
              className="md:w-[80%] lg:w-full rounded-lg lg:min-h-[300px]"
              src={`${IMGBaseURL + details.backdrop_path}`}
            />
          </div>
          <div className="w-full text-start basis-[45%] lg:mt-0 mt-8">
            <h1 className="text-[2em] rsm:text-[2.5em] leading-[40px] rsm:leading-[55px] xl:leading-[70px] xl:text-[4em] font-semibold">
              {details.original_title
                ? details.original_title
                : details.original_name}
            </h1>
            <h2 className="lg:text-[18px] text-[17px] mt-[7px] rsm:text-[20px] xl:text-[1.3em] italic">
              {details.tagline}
            </h2>
            <p className="lg:text-[17px] text-[16px] md:text-[19px] xl:text-[23px] mt-5">
              {details.overview}
            </p>
            <ul className="flex items-center gap-3 md:gap-5 mt-12 relative bottom-[15px]">
              {genres.map((item, index) => (
                <li
                  className="md:text-[18px] text-[15px] font-semibold text-[#b4b4b4]"
                  key={index}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-6 md:px-16 mt-10 mb-20">
          <h1 className="text-[2em] font-semibold mb-[8px]">Similiar</h1>
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
              {similar.map((item, index) => (
                <div
                  id="listMovie"
                  key={index}
                  className={`min-w-[250px] ${item.backdrop_path ? "block" : "hidden"} relative py-4`}
                >
                  <Link to={`/more-info/${item.id}`}>
                    <img
                      className="w-full hover:border-[3px] hover:scale-110 duration-200 ease-in-out border-white  cursor-pointer rounded-md"
                      src={`${IMGBaseURL + item.backdrop_path}`}
                    />
                  </Link>
                  <h2 className="mt-[-40px] ml-2 absolute font-mono font-semibold text-white ">
                    {item.original_name
                      ? item.original_name
                      : item.original_title}
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
        
        </>) : (<div className=" min-h-[50vh] flex items-center justify-center">
          <h1 className="text-[2em] font-bold">The Film has experied | 404</h1>
        </div>)}
        
        <Footer />
      </div>
    </div>
  );
};

export default MoreInfoPage;
