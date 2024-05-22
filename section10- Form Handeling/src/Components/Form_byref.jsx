import React, { useState } from "react";
import { useRef } from "react";

const Form_byref = () => {
  const name = useRef(null);

  const [message, setMessage] = useState("");

  const handleSubmit = (details) => {
    details.preventDefault();

    setMessage("Submitted");
    console.log(name.current.value);
    details.target.reset();
  };

  return (
    <div>
      <div
        className="w-[325px] h-52 bg-red-300 rounded-md
    flex items-start   flex-col justify-center
     "
      >
        <span
          className="text-black mt-1 p-3 items-center justify-center text-1xl
        
        "
        >
          {" "}
          <h1 className="font-semibold ml-10 "> Form Handeling using UseRef</h1>
        </span>

        <form
          action=""
          onSubmit={handleSubmit}
          className="p-5 flex flex-col justify-center items-center ml-12   "
        >
          <input type="text" name="" ref={name} placeholder="Write here " />
          <input
            type="submit"
            value="Submit"
            className=" px-3 py-1 mt-3  bg-blue-300"
          />
        </form>
        {message}
      </div>
    </div>
  );
};

export default Form_byref;
