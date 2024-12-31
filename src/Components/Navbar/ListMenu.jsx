import React from "react";
import { Link } from "react-router-dom";

const ListMenu = ({name, url}) => {
  return (
    <Link to={url}>
      <li id="listHover" className="relative cursor-pointer flex-nowrap">
        <h2 className="font-semibold">{name}</h2>
      </li>
    </Link>
  );
};

export default ListMenu;
