import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Login from "./pages/Login/Login";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Login />
    </div>
  );
};

export default App;
