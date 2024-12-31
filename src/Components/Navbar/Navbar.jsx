import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaSearch, FaBell, FaChevronUp } from "react-icons/fa";
import profil from "../../assets/profile_img.png";
import { HiDotsVertical } from "react-icons/hi";
import ListMenu from "./ListMenu";
import { RiMenuFold3Line } from "react-icons/ri";
import GenreMovies from "../../Genres/GenreMovies";
import GlobalApi from "../../Service/GlobalApi";

const Navbar = ({ handleShowAddMenu, showAddMenu, setResult, search }) => {
  const [animationScroll, setAnimationSCroll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
    if (searchInput.length > 2) {
      GlobalApi.Searching(searchInput, "movie").then((response) => {
        setResult(response.data.results);
      });

      GlobalApi.Searching(searchInput, "tv").then((response) => {
        setResult(response.data.results);
      });
    }
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      if (showAddMenu) {
        setAnimationSCroll(false);
      } else {
        setAnimationSCroll(true);
      }
    } else {
      setAnimationSCroll(false);
    }
  });

  function handleEnterKey(e) {
    if (e.key === "Enter") {
      console.log("berhasil");
      setSearchInput("");
      setShowSearch(false);
    }
  }

  return (
    <nav
      className={`${
        animationScroll
          ? "py-2 bg-black text-white"
          : "py-5 bg-transparent text-black"
      } px-8 md:px-16 text-white flex items-center z-30 justify-between fixed min-w-full top-0 left-0 bg-[blue]`}
    >
      <div className="flex gap-4 md:gap-6 xl:gap-16">
        <img
          id="myLogo"
          className={`${showSearch ? "hidden" : "block"} ${
            showAddMenu ? "hidden" : "block"
          } md:block w-[60px] xl:w-[100px]`}
          src={logo}
        />

        <ul
          className={`hidden ${
            showSearch ? "hidden" : "lg:flex"
          } flex-nowrap gap-[20px] text-[16px] xl:text-[17px] font-semibold`}
        >
          {GenreMovies.menuLists.map((item, index) => (
            <ListMenu name={item.name} key={index} url={item.url} icon={null} />
          ))}
        </ul>

        <ul
          className={`${
            showSearch ? "hidden" : "md:flex"
          } lg:hidden hidden gap-[15px] text-[15px] font-semibold`}
        >
          {GenreMovies.menuLists.map(
            (item, index) =>
              index < 3 && (
                <ListMenu name={item.name} key={index} url={item.url} />
              )
          )}
        </ul>

        <ul className={`lg:hidden hidden ${showSearch ? "hidden" : "md:flex"}`}>
          <div className="dropdown dropdown-hover">
            <HiDotsVertical tabIndex={0} className="my-1 cursor-pointer" />
            <div className="dropdown-menu py-3 px-4 mt-[10px] dropdown-menu-bottom-right w-[190px]">
              {GenreMovies.menuLists.map(
                (item, index) =>
                  index >= 3 && (
                    <ListMenu url={item.url} name={item.name} key={index} />
                  )
              )}
            </div>
          </div>
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <div
          className={`flex rounded-sm overflow-hidden ${
            showAddMenu ? "hidden" : "block"
          } ${search} ${
            showSearch ? "bg-white" : "bg-transparent"
          } duration-300 ease-in-out items-center justify-between`}
        >
          <input
            className={`flex-1 text-[16px] ${
              showSearch ? "lg:w-[500px] pl-4 w-full" : "w-[0] pl-0"
            } bg-transparent border-none outline-none text-black`}
            type="text"
            placeholder="Search"
            onKeyDown={handleEnterKey}
            value={searchInput}
            onChange={handleSearchInput}
          />
          <div
            className={`py-[8px] ${
              showSearch ? "bg-[#252525]" : "bg-transparent"
            } flex items-center justify-center px-3 duration-300 ease-in-out`}
          >
            <FaSearch
              onClick={() => setShowSearch(!showSearch ? true : false)}
              className={`text-white cursor-pointer`}
            />
          </div>
        </div>

        <FaBell className="hidden md:flex cursor-pointer" />
        <img className="w-[30px] hidden md:flex cursor-pointer" src={profil} />
        <FaChevronUp className="ml-[-10px] w-[10px] hidden md:flex cursor-pointer" />

        <RiMenuFold3Line
          onClick={() => handleShowAddMenu()}
          className={`text-[23px] z-50 ${
            showAddMenu ? "rotate-[180deg]" : "rotate-0"
          } duration-300 ease-in-out block md:hidden`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
