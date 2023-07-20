import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ image, title, number, title2, link, desc, disabled }) => {
  if (!disabled) {
    return (
      <Link to={link}>
        <motion.div
          className="cursor-pointer transition duration-500 ease-in-out rounded-lg bg-white h-auto items-center text-center justify-center  flex flex-col  
          shadow-md bg-opacity-40 backdrop-filter backdrop-blur-sm border border-emerald-100 hover:shadow-md hover:shadow-emerald-100"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex p-1 justify-center items-center rounded-md xs:h-24 sm:h-24 md:h-32 lg:h-36 sm:w-40 xs:w-40 lg:w-64 lg:mt-3  mb-5">
            <img
              src={image}
              alt=""
              className="w-full h-full rounded-lg object-fill p-2"
            />
          </div>
          <div className="pb-2  flex flex-col h-20 mb-2">
            <span className="text-emerald-600 font-sans font-medium lg:text-[16px] xs:text-[12px] sm:text-[12px] md:text-[12px]">
              {title}
            </span>

            <span className="text-emerald-600 lg:text-md xs:text-sm mt-2">
              🌟 {number} {title2}
            </span>
            {desc ? (
              <span className="text-[12px] text-gray-500 px-4 mb-5 font-normal font-sans">
                {"💡"}
                {desc.split(" ").slice(0, 10).join(" ")}
              </span>
            ) : (
              ""
            )}
          </div>
        </motion.div>
      </Link>
    );
  }
  return (
    <div
      className="cursor-not-allowed relative"
      title="Attempt this question please buy Subscription account"
    >
      <motion.div
        className={`cursor-pointer transition duration-500 ease-in-out rounded-lg bg-white h-auto items-center text-center justify-center  flex flex-col  
      shadow-md bg-opacity-40 backdrop-filter backdrop-blur-sm border border-emerald-100 hover:shadow-md hover:shadow-emerald-700 ${
        disabled ? "opacity-50 pointer-events-none bg-gray-900" : ""
      }`}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex p-1 justify-center items-center rounded-md xs:h-24 sm:h-24 md:h-32 lg:h-36 sm:w-40 xs:w-40 lg:w-64 lg:mt-3  mb-5">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-lg object-fill p-2"
          />
        </div>
        <div className="pb-2  flex flex-col h-20 mb-2">
          <span className="text-emerald-800 font-sans font-medium lg:text-[16px] xs:text-[12px] sm:text-[12px] md:text-[12px]">
            {title}
          </span>

          <span className="text-emerald-500 text-md ">
            🌟 {number} {title2}
          </span>
          {desc ? (
            <span className="text-[12px] text-gray-500 px-4 mb-3 font-normal font-sans">
              {"💡"}
              {desc.split(" ").slice(0, 15).join(" ")}
            </span>
          ) : (
            ""
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
