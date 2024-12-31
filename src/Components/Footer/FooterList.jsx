import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

const FooterList = () => {
  const lists = [
    {
      id: 1,
      title: "Product",
      ulLists: ["Features", "Integrations", "Pricing", "FAQ"],
    },
    {
      id: 2,
      title: "Company",
      ulLists: ["Privacy", "Terms of Service"],
    },
    {
      id: 3,
      title: "Developers",
      ulLists: ["Guides", "Documentation", "Public API"],
    },
    {
      id: 4,
      title: "Help",
      ulLists: ["Help Center", "Cookie Preference", "Contact Us"],
    },
  ];

  const [openId, setOpenId] = useState(null);

  function handleToggle(id) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <>
      {lists.map((item, index) => (
        <div key={index} className="rmd:space-y-3 hidden rmd:block">
          <h3 className="tracking-wide flex items-center justify-between uppercase font-semibold text-[18px] mt-[20px]">
            {item.title}
            <span className="hidden">
              <FaChevronLeft />
            </span>
          </h3>
          <ul className="rmd:space-y-2 text-[16px] font-semibold text-gray-300">
            {item.ulLists.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      ))}
      {lists.map((item, index) => (
        <div
          onClick={() => handleToggle(item.id)}
          key={index}
          className="block cursor-pointer rmd:hidden bg-[rgb(9,9,9)] mt-[15px] py-[15px] px-5"
        >
          <h3 className="tracking-wide flex items-center justify-between uppercase font-semibold text-[18px]">
            {item.title}
            <span>
              <FaChevronLeft />
            </span>
          </h3>
          <ul
            id={`${item.id}`}
            className={`text-[16px] space-y-1 ${
              openId === item.id
                ? "opacity-100 max-h-[100px] mt-3"
                : "opacity-0 max-h-0 mt-0"
            } duration-300 ease-in-out font-semibold overflow-hidden text-gray-300`}
          >
            {item.ulLists.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterList;
