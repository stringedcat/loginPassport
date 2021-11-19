import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama App</span>
      <ul className="list">
        <li className="listItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Userbox_creeper.svg/1200px-Userbox_creeper.svg.png"
            alt=""
            className="avatar"
          />
        </li>
        <li className="listItem">Mauro Loyola</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
