import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
