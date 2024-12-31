import React from "react";
import GenreMovies from "../Genres/GenreMovies";
import ListMenu from "./Navbar/ListMenu";
import logo from "../assets/logo.png";
import profile from "../assets/profile_img.png";

const SideBar = ({ showAddMenu }) => {
  return (
    <div
      className={`fixed right-0 z-30 flex h-screen flex-row gap-4 overflow-y-auto bg-[rgb(27,27,27)] sm:overflow-x-hidden md:hidden ${
        showAddMenu ? "w-[60%] opacity-100" : "w-0 opacity-0"
      } duration-300 ease-in-out`}
    >
      <aside className="sidebar justify-start">
        <section className="sidebar-title items-center p-4">
          <img className="w-[50px] mt-2" src={logo}/>
        </section>
        <section className="sidebar-content min-h-[20rem]">
          <nav className="menu rounded-md">
            <section className="menu-section px-4">
              <span className="menu-title">Main menu</span>
              <ul className="menu-items">
                {GenreMovies.menuLists.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 mt-5">
                    <item.icon className="text-[19px]" />
                    <ListMenu name={item.name} url={item.url} key={index} index={index} id={item.id}/>
                  </div>
                ))}
              </ul>
            </section>
          </nav>
        </section>
        <section className="sidebar-footer bg-gray-2 pt-2">
          <div className="divider my-0"></div>
          <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
            <label
              className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
              tabIndex="0"
            >
              <div className="flex flex-row gap-4 p-4">
                <div className="avatar avatar-md">
                  <img src={profile} className="w-[35px]"/>
                </div>

                <div className="flex flex-col">
                  <span>Jesta Putra</span>
                  <span className="text-xs font-normal text-content2">
                    Justin
                  </span>
                </div>
              </div>
            </label>
          </div>
        </section>
      </aside>
    </div>
  );
};

export default SideBar;
