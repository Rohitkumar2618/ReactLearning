import { useState } from "react";

import img1 from "../assets/4bd4b0c85cdfebe6098907626d3599e2.jpg";
import img2 from "../assets/cd2616a37bf938cedf18b29bc3307495.jpg";

const Card1 = () => {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen transition-transform   bg-zinc-300 flex justify-center items-center ">
      <div className=" relative rounded-md w-60 h-32 bg-zinc-500  overflow-hidden  flex">
        <img
          className={`shrink-0  transition-transform  duration-700 ${
            val === false ? " -translate-x-[0%]" : "-translate-x-[100%]"
          }  w-full h-full object-fit overflow-hidden  `}
          src={img1}
          alt=""
        />

        <img
          className={`shrink-0  duration-700  ${
            val === false ? " -translate-x-[0%]" : "-translate-x-[100%]"
          } w-full h-full object-cover`}
          src={img2}
          alt=""
        />

        <span
          className="w-5 h-5 bg-[#dadada7b] rounded-full absolute flex items-center justify-center bottom-[0%]   
             
        left-1/2 -translate-x-[50%] -translate-y-[50%]
        "
          onClick={() => setVal(() => !val)}
        >
          -
        </span>
      </div>
    </div>
  );
};

export default Card1;
