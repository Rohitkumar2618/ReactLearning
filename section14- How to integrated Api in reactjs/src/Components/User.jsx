import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className="  w-1/2 m-auto  mt-10">
      <h1 className="text-5xl mb-2">Users</h1>

      <div className="flex w-1/2 flex-col mt-5">
        <Link
          to="/user/shraman"
          className="p-5 bg-red-200 text-2xl mb-3 hover:bg-red-300"
        >
          Shraman
        </Link>
        <Link
          to="/user/sanvidhan"
          className="p-5 bg-red-200 text-2xl mb-3 hover:bg-red-300"
        >
          Sanvidhan
        </Link>
        <Link
          to="/user/aaru"
          className="p-5 bg-red-200 text-2xl mb-3 hover:bg-red-300"
        >
          Aaru
        </Link>
      </div>

      <button className="  px-2 py-3 mt-50 rounded-md bg-red-400 text-white">
        Explore More
      </button>

      <hr />
      <Outlet />
    </div>
  );
};

export default User;
