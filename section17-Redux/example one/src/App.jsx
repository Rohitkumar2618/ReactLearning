import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "./store/counterSlice";

const App = () => {
  // Isse jo count me value hai usse nikala

  const count = useSelector((state) => state.counter.value);

  // dispach se chang
  const dispatch = useDispatch();

  return (
    <>
      <div className="m-auto w-1/2 h-1/2 rounded-md container mt-72  bg-zinc-200 p-10 ">
        <h1 className="mb-5 text-center font-bold text-3xl text-red-900">
          Counter: {count}
        </h1>

        <div className="text-center flex items-center justify-center mt-10 ">
          <button
            className="text-red-900 border-red-500 border-2 rounded bg-transparent px-5 font-semibold py-2 mx-3"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="text-red-900 border-red-500 border-2 rounded bg-transparent px-5 py-2 mx-3"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="text-red-900 border-red-500 border-2 rounded bg-transparent  text-sm px-5 py-2 mx-3"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment by 5
          </button>

          <button
            className="text-red-900 border-red-500 border-2 rounded bg-transparent px-5 py-2 mx-3 text-sm text-wrap"
            onClick={() => dispatch(incrementAsync(5))}
          >
            Increment by 5 after 2 sec
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
