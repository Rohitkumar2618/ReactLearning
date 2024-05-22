import React from "react";
import { useForm } from "react-hook-form";

// Using React Hook Form

// ! first download the package --> npm i react-hook-form

// use it

// const { register, handleSubmit } = useForm();

const { register, handleSubmit } = useForm();



const UsingHookForm = () => {
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
          <h1 className="font-semibold ml-10 "> Form Handeling using Hook</h1>
        </span>

        {/* ! Handle submit pe  function chala jo on change pe value hai vo consolelog ho gayi in the form of the object  */}
        <form
          action=""
  
          onClick={handleSubmit(data => console.log(data))}
          className="p-5 flex flex-col justify-center items-center ml-12   "
        >
          <input type="text" {...register('name')}  placeholder="Write here " />
          <input
            type="submit"
            value="Submit"
            className=" px-3 py-1 mt-3  bg-blue-300"
          />
        </form>
        <h1>Submitted</h1>
      </div>
    </div>
  )
};

export default UsingHookForm;
