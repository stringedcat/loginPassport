import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="navbar">
      <span className="logo">
        {user ? (
          <Link className="link" to="/">
            <h2> Home</h2>
          </Link>
        ) : (
          <Link className="link" to="/">
            <h2>Welcome to my authentication App</h2>
          </Link>
        )}
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            {user.photos ? (
              <img src={user.photos[0].value} alt="" className="avatar" />
            ) : (
              <h6> nothing</h6>
            )}
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <>
          <h3>(Identify yourself to see the docs)</h3>
          <Link className="link" to="/login">
            <h3>LOG IN HERE</h3>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
