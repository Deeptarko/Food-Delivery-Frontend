import React, { useState } from "react";
import "./DropdownMenu.css";
import { useDispatch } from "react-redux";
import { setCategoryFilter, setPriceFilter } from "../../slices/FilterSlice";

const DropdownMenu = ({ name = "Dropdown", menu = ["Item 1", "Item 2"] }) => {
  const [dropdownActive, setDropwdownActive] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropwdownActive(!dropdownActive);
  };

  const setFilters = (filterName, name) => {
    console.log("Filter Pressed");
    if (name == "Category") {
      dispatch(setCategoryFilter(filterName));
    } else if (name == "Price") {
      dispatch(setPriceFilter(filterName));
    }
  };

  return (
    <div className={dropdownActive == true ? "dropdown active" : "dropdown"}>
      <button className="link" onClick={toggleDropdown}>
        {name}
      </button>
      <div className="dropdown-menu">
        {menu.map((filterName, index) => (
          <li key={index} onClick={() => setFilters(filterName, name)}>
            {filterName}
          </li>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
