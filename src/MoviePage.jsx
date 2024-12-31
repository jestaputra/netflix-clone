import React, {useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import FilmLists from "./Components/FilmLists";
import GlobalApi from "./Service/GlobalApi";
import GenreMovies from "./Genres/GenreMovies";
import Footer from "./Components/Footer/Footer";
import SideBar from "./Components/SideBar";
const IMGBaseURL = "https://image.tmdb.org/t/p/original/";

const MoviePage = () => {

  const [showAddMenu, setShowAddMenu] = useState(false);

    const handleShowAddMenu = () => {
      setShowAddMenu(!showAddMenu ? true : false);
    };

  return (
    <div className="relative">
      <SideBar showAddMenu={showAddMenu} />
      <Navbar search="hidden" handleShowAddMenu={handleShowAddMenu} showAddMenu={showAddMenu} />
      <div className="w-full min-h-screen relative">
      <Banner API={GlobalApi.TrendingMovies} />
      <div className="px-8 py-8 md:px-16">
        {GenreMovies.genreMovies.map(
          (item, index) =>
            index < 10 && (
              <div className="mt-5" key={index}>
                <h2 className="text-[20px] md:text-[23px] py-4 font-semibold">
                  {item.name}
                </h2>
                <FilmLists
                  imageURL={IMGBaseURL}
                  API={GlobalApi.Movies(item.id)}
                />
              </div>
            )
        )}
      </div>
      <Footer />
      </div>
    </div>
  );
};

export default MoviePage;
