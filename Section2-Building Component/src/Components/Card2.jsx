import React from "react";

const Card2 = () => {
  return (
    <>
      <div className="m-auto container mt-5 bg-red-100 p-10 ">
        <h1 className="mb-5 text-center font-bold text-3xl text-red-900">
          Counter:
        </h1>

        <div className="text-center flex items-center justify-center mt-10 ">
          <button
            className="text-red-900 border-red-500 border-2 rounded bg-transparent px-5 py-2 mx-3"
            // onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="text-red-900 border-red-500 border-2 rounded bg-transparent px-5 py-2 mx-3"
            // onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="text-red-900 border-red-500 border-2 rounded bg-transparent px-5 py-2 mx-3"
            // onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment by 5
          </button>
        </div>
      </div>
    </>
  );
};

export default Card2;
