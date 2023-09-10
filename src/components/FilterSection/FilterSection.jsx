import React from "react";
import "./FilterSection.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const FilterSection = () => {
  return (
    <div className="filter">
      <DropdownMenu name="Category" menu={["Veg", "Non Veg"]} />
      <DropdownMenu name="Price" menu={["100", "1000"]} />
      <DropdownMenu />
      <DropdownMenu />
    </div>
  );
};

export default FilterSection;
