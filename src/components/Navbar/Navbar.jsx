import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Lama App
        </Link>
      </span>
      {user ? (
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
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
