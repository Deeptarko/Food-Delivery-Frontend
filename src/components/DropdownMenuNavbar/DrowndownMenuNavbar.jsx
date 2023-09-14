import React, { useState } from "react";
import { Link } from "react-router-dom";

const DrowndownMenuNavbar = ({
  name = "Dropdown",
  menu = [{ name: "Demo", link: "/demo" }],
}) => {
  const [dropdownActive, setDropwdownActive] = useState(false);
  const toggleDropdown = () => {
    setDropwdownActive(!dropdownActive);
  };
  return (
    <div className={dropdownActive == true ? "dropdown active" : "dropdown"}>
      <button className="link" onClick={toggleDropdown}>
        {name}
      </button>
      <div className="dropdown-menu">
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={`${item.link}`} className="navbar-link-item">
              {item.name}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default DrowndownMenuNavbar;
