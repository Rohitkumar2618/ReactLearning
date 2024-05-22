import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Context";

const User = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-3xl">Users Details</h1>

      <div className="mt-10">
        {users.map((u) => (
          <Link
            key={u.id}
            to={`/user/${u.id}`}
            className="mb-3 bg-red-100 p-3 block"
          >
            {u.username}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
