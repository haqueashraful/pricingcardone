import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Free = ({ price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white ${
        isHovered ? "hover:bg-slate-900 hover:text-white" : ""
      } p-8 text-left flex justify-between flex-col`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8">
        <div>
          <h1>Free</h1>
          <p className="text-gray-400">For freelancers</p>

          <h2 className="font-bold text-3xl py-5">${price}</h2>
        </div>
        <div className="my-4 space-y-5 flex flex-col justify-center items-start">
          <span className="flex justify-start items-center gap-2">
            <CheckCircleIcon className="text-sm" />{" "}
            <p className="text-sm">1 users</p>
          </span>
          <span className="flex justify-start items-center gap-2">
            <CheckCircleIcon className="text-sm" />{" "}
            <p className="text-sm">10 Downloads per day</p>
          </span>
          <span className="flex justify-start items-center gap-2">
            <CheckCircleIcon className="text-sm" />{" "}
            <p className="text-sm">Daily content updates</p>
          </span>
        </div>
      </div>
      <div>
        <button
          className={`${
            isHovered ? "bg-slate-200 text-black" : "bg-slate-900 text-white"
          } w-full p-2 rounded-full`}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Free;
