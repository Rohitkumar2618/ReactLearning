import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UsersDetails = () => {
  const { name } = useParams();

  const navigate = useNavigate();

  const GobackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="  w-1/2 m-auto  mt-10">
      <h1 className="text-5xl mb-2">User Details</h1>
      <h1 className="mt-12 text-5xl ">Hiii {name}</h1>
      <button
        onClick={GobackHandler}
        className="  px-2 py-3 mt-50 rounded-md bg-red-400 text-white"
      >
        Go back
      </button>
    </div>
  );
};

export default UsersDetails;
