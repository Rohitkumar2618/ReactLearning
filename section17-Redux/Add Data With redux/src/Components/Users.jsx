import { asyncgetusers } from "../store/actions/UserAction";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const { users } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetusers());
  }, []);

  return (
    <>
      <div className="m-auto container p-10 mt-5 bg-red-100">
        <h1 className="text-2xl font-bold text-red-900">Product List</h1>

        <ul>
          {users &&
            users.map((user, index) => (
              <li key={user.id}>
                <div className="flex">
                  {" "}
                  <h1 className="font-semibold text-1xl  font-[gilroy]">
                    {" "}
                    {user.username} :
                  </h1>
                  <h1 className="mx-3  font-bold "> {users.id}</h1>
                  <span
                    // onClick={() => DeleteHandeler(index)}
                    className="text-red-500 font-black cursor-pointer"
                  >
                    {" "}
                    X
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Users;
