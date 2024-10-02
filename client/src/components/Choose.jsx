"use client";
import { useState, useRef } from "react";
import { FaHome } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { RiDrinksFill } from "react-icons/ri";
import { FaTaxi } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState("Choose");
  const dropdownRef = useRef(null);

  const handleSelect = (item) => {
    setSelectedItem(item);

    if (dropdownRef.current) {
      dropdownRef.current.removeAttribute("open");
    }
  };

  return (
    <div>
      <details className="dropdown" ref={dropdownRef}>
        <summary className="btn bg-gray-100 justify-start w-[320px]">
          {selectedItem}
        </summary>
        <ul className="menu dropdown-content bg-base-100 gap-2 rounded-box z-[1] w-[320px] p-2 shadow">
          <li>
            <a onClick={() => handleSelect(<FaHome />)}>
              <FaHome />
              Home
            </a>
          </li>
          <li>
            <a onClick={() => handleSelect(<FaGift />)}>
              <FaGift />
              Gift
            </a>
          </li>
          <li>
            <a onClick={() => handleSelect(<IoFastFood />)}>
              <IoFastFood />
              Food
            </a>
          </li>
          <li>
            <a onClick={() => handleSelect(<RiDrinksFill />)}>
              <RiDrinksFill />
              Drink
            </a>
          </li>
          <li>
            <a onClick={() => handleSelect(<FaTaxi />)}>
              <FaTaxi />
              Taxi
            </a>
          </li>
          <li>
            <a onClick={() => handleSelect(<FaShoppingBag />)}>
              <FaShoppingBag />
              Shopping
            </a>
          </li>
        </ul>
      </details>
      {selectedItem !== "open or close" && <div className="mt-4"></div>}
    </div>
  );
};

export default Dropdown;
