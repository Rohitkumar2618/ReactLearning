import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleSubmitData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data) => {
    handleSubmitData(data);
    reset();
  };

  return (
    <div>
      <div className="mt-52 flex gap-10 justify-center">
        <form
          action=""
          className="flex gap-10"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Name"
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            type="text"
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <input
            {...register("image", { required: "Image URL is required" })}
            type="text"
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
            placeholder="Image URL"
          />

          <input
            {...register("description", { required: "Description" })}
            type="text"
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
            placeholder="Please enter description"
          />

          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
          <input
            className="rounded-md px-5 py-1 bg-blue-500 text-white font-semibold"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
