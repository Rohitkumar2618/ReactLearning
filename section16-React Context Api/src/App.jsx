import React from "react";

import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
const App = () => {
  return (
    <div className="p-1  w-1/2  m-auto ">
      <nav className="mt-10 my-10 flex justify-center  gap-10 ">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
