import React from "react";
import Card from "./Card";

// !Props ke help se yaha users or handleRemove pass hua jo ki ab hum card ke isme send krenge
function Cards({ users, handleRemove }) {
  return (
    <div className="w-full max-h-96 p-4 flex justify-center items-center overflow-auto gap-4 flex-wrap">
      {/* usse map karaya */}
      {/* map se user nikala or key and index an props through jo bhi function aaye usse pass kr diya Card component ko */}
      {users.map((item, index) => (
        <Card key={index} id={index} user={item} handleRemove={handleRemove} />
      ))}
    </div>
  );
}

export default Cards;
