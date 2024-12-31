import GlobalApi from "../../Service/GlobalApi";
// import Popular from "./Popular";
const IMGBaseURL = "https://image.tmdb.org/t/p/original/";
import HotMovieLists from "./HotMovieLists";

const HotMovies = () => {
  return (
    <div className="px-8 py-8 md:px-16">
      <HotMovieLists
        API={GlobalApi.PopularMovies}
        imgURL={IMGBaseURL}
        title="Popular Movies"
      />
      <HotMovieLists
        API={GlobalApi.TopRatedMovies}
        imgURL={IMGBaseURL}
        title="Top Rated"
      />
      <HotMovieLists
        API={GlobalApi.upComing}
        imgURL={IMGBaseURL}
        title="UpComing Movies"
      />
    </div>
  );
};

export default HotMovies;
