import React from "react";

import { useState } from "react";

const HandelingWithState = () => {
  // !Pahle value ko use state me laya kuaki real time pe update kr paye
  const [val, setVal] = useState({ name: "" });

  const [mesaage, setMessage] = useState("");

  // !Handle submit function jab form submit ho tab console me pront kare
  const handleSubmit = (event) => {
    // ! isse page reload naho hoga
    event.preventDefault();

    // !page submit ho tab kya submit dikhe iske liye
    setMessage("Submit");

    console.log(val);
  };

  return (
    <div className="flex items-center   justify-center">
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
          <h1 className="font-semibold ml-10 "> Form Handeling using State </h1>
        </span>

        {/* ! Handle submit pe  function chala jo on change pe value hai vo consolelog ho gayi in the form of the object  */}
        <form
          action=""
          onSubmit={handleSubmit}
          onChange={(event) => setVal({ ...val, name: event.target.value })}
          className="p-5 flex flex-col justify-center items-center ml-12   "
        >
          <input type="text" name="" placeholder="Write here " />
          <input
            type="submit"
            value="Submit"
            className=" px-3 py-1 mt-3  bg-blue-300"
          />
        </form>
        <h1>Submitted</h1>
      </div>
    </div>
  );
};

export default HandelingWithState;
