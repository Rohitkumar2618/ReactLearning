import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import User from "../Components/User";
import UsersDetails from "../Components/UsersDetails";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:name" element={<UsersDetails />} />
      </Routes>
    </>
  );
};

export default Routing;
