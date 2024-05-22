import React, { useState, useEffect } from "react";
import axios from "../utils/axios";

const User = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-5xl mb-2">Users List</h1>

      <div className="flex w-1/2 flex-col mt-5">
        <ul>
          {users.length > 0 ? (
            users.map((u) => (
              <li key={u.id} className="rounded mb-2 p-3 bg-red-300">
                {u.username}
              </li>
            ))
          ) : (
            <h1>Loading.....</h1>
          )}
        </ul>
      </div>

      <hr />
    </div>
  );
};

export default User;
