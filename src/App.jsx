import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx"
import SeriesPage from "./SeriesPage.jsx"
import MoviePage from "./MoviePage.jsx"
import PopularFilmPage from "./PopularFilmPage.jsx"
import MoreInfoPage from "./MoreInfoPage.jsx"

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/series" element={<SeriesPage/>}/>
      <Route path="/movies" element={<MoviePage/>}/>
      <Route path="/popular-movies" element={<PopularFilmPage/>}/>
      <Route path="/more-info/:id" element={<MoreInfoPage/>}/>
    </Routes>
      
    </>
  );
}

export default App;
