import React, { useState } from "react";
import "./DropdownMenu.css";

const DropdownMenu = ({name='Dropdown',menu=['Item 1','Item 2']}) => {
  const [dropdownActive, setDropwdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropwdownActive(!dropdownActive);
  };

  return (
    <div className={dropdownActive==true ? 'dropdown active':'dropdown'}>
      <button className="link" onClick={toggleDropdown}>
       {name}
      </button>
      <div className="dropdown-menu">
        
        {menu.map((item,index)=><li key={index}>{item}</li>)}
        
        </div>
    </div>
  );
};

export default DropdownMenu;
