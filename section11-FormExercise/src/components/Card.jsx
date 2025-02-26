import React from "react";

function Card({ user, handleRemove, id }) {
  return (
    <div className="w-52 h-full bg-slate-400 rounded-lg flex flex-col items-center justify-center p-2">
      <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
        <img
          src={user.image}
          className="w-full h-full object-cover"
          alt={user.name}
        />
      </div>
      <h1 className="mt-1 text-xl font-semibold text-center  leading-none ">
        {user.name}
      </h1>
      <h4 className="opacity-60 text-xs font-semibold">{user.email}</h4>
      <div className="mt-1 text-center text-xs font-semibold leading-1 tracking-tight">
        {user.description}
      </div>
      <button
        onClick={() => handleRemove(id)}
        className="px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4"
      >
        Remove It
      </button>
    </div>
  );
}

export default Card;
