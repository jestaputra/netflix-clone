import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import GlobalApi from "./Service/GlobalApi";
import HotMovieLists from "./Components/Hotmovies/HotMovieLists";
const IMGBaseURL = "https://image.tmdb.org/t/p/original/";
import Footer from "./Components/Footer/Footer";
import SideBar from "./Components/SideBar";

const PopularFilmPage = () => {
  const [showAddMenu, setShowAddMenu] = useState(false);
  const handleShowAddMenu = () => {
    setShowAddMenu(!showAddMenu ? true : false);
  };

  return (
    <div className="relative">
      <SideBar showAddMenu={showAddMenu} />
      <Navbar search="hidden" handleShowAddMenu={handleShowAddMenu} showAddMenu={showAddMenu} />
      <Banner API={GlobalApi.topRated} />
      <div className="md:px-16 px-8 py-6">
        <HotMovieLists
          API={GlobalApi.PopularMovies}
          imgURL={IMGBaseURL}
          title="Popular Movies"
        />
        <HotMovieLists
          API={GlobalApi.upComing}
          imgURL={IMGBaseURL}
          title="UpComing"
        />
        <HotMovieLists
          API={GlobalApi.PopularSeries}
          imgURL={IMGBaseURL}
          title="Popular Series"
        />
        <HotMovieLists
          API={GlobalApi.onTheAir}
          imgURL={IMGBaseURL}
          title="On The Air"
        />
        <HotMovieLists
          API={GlobalApi.airingToday}
          imgURL={IMGBaseURL}
          title="Airing Today"
        />
      </div>
      <Footer />
    </div>
  );
};

export default PopularFilmPage;
