import React, { useState } from "react";

const Card1 = () => {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="p-5">
      {val.map((item) => (
        <h1>{item}</h1>
      ))}

      <button
        className=" px-4 py-4 rounded-md
       bg-slate-400"
        onClick={() =>
          setVal(() => {
            return val.filter((item, index) => index !== val.length - 1);
          })
        }
      >
        click
      </button>
    </div>
  );
};

export default Card1;
