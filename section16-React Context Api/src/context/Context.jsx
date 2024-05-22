import React, { createContext, useState } from "react";

export const UserContext = createContext();
const Context = (props) => {
  const [users, setUsers] = useState([
    { id: 0, username: "Ramesh", city: "MAHARASHTRA" },
    { id: 1, username: "Suresh", city: "UP" },
    { id: 2, username: "Mangesh", city: "BIHAR" },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
