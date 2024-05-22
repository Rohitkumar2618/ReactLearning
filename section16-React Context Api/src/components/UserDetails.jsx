import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);

  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1 className="text-red-200 text-4xl font-bold ">{user.username}</h1>
      <h3 className="mt-3 font-bold">{user.city}</h3>

      <button
        onClick={() => navigate(-1)}
        className="rounded mt-5 bg-red-400 p-2 "
      >
        {" "}
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
