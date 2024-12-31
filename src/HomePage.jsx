import React, { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import "./Components/animation.css";
import HotMovies from "./Components/Hotmovies/HotMovies";
import Footer from "./Components/Footer/Footer";
import GlobalApi from "./Service/GlobalApi";
import SideBar from "./Components/SideBar";
import { Link } from "react-router-dom";
const IMGBaseURL = "https://image.tmdb.org/t/p/original/";

const HomePage = () => {
  const [resultSearch, setResultSearch] = useState([]);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const handleShowAddMenu = () => {
    setShowAddMenu(!showAddMenu ? true : false);
  };

  return (
    <div className="relative w-full min-h-screen">
      <SideBar showAddMenu={showAddMenu} />
      <div className={`relative min-w-full min-h-screen bg-[black]`}>
        <Navbar
          setResult={setResultSearch}
          handleShowAddMenu={handleShowAddMenu}
          showAddMenu={showAddMenu}
        />
        {resultSearch == "" ? (
          <>
            <Banner API={GlobalApi.AllTrending} />
            <HotMovies />
          </>
        ) : (
          <div className="w-full pt-[70px] md:pt-[100px] px-6 md:px-[55px] h-full gap-[20px] md:gap-[40px] flex justify-center flex-wrap">
            {resultSearch.map((item, index) => (
              <Link to={`/more-info/${item.id}`}>
              <div className="w-[150px] rmd:w-[200px] rounded-lg overflow-hidden hover:border-[3.5px] hover:scale-110 cursor-pointer duration-200 ease-in-out" key={index}>
                <img src={IMGBaseURL + item.poster_path}/>
              </div>
              </Link>
            ))}
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
