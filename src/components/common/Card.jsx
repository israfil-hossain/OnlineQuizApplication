import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ image, title, number, title2, link, desc, disabled }) => {
  if (!disabled) {
    return (
      <Link to={link}>
        <motion.div
          className="
          bg-gradient-to-r from-white via-indigo-100 to-gray-50
          cursor-pointer transition duration-500 ease-in-out rounded-lg bg-white h-auto items-center text-center justify-center  flex flex-col  
          shadow-md  backdrop-filter backdrop-blur-sm border border-emerald-100 hover:shadow-md hover:shadow-emerald-100"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex justify-center items-center rounded-md xs:h-24 sm:h-24 md:h-32 lg:h-36 w-full mb-1">
            <img
              src={image}
              alt=""
              className="w-full h-full rounded-lg object-fill"
            />
          </div>
          <div className=" w-full border-b-2 border-solid border-slate-50 py-1"></div>
          <div className="p-2  flex flex-col h-auto mb-2">
            <span className="text-emerald-500 font-sans font-bold lg:text-[16px] xs:text-[14px] sm:text-[14px] md:text-[14px]">
              {title}
            </span>

            <span className="text-emerald-500 text-[12px] py-2">
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
        shadow-md  backdrop-filter backdrop-blur-sm border border-emerald-100 hover:shadow-md hover:shadow-emerald-700 ${
        disabled ? "opacity-60 pointer-events-none bg-gray-600" : ""
      }`}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-center items-center rounded-md xs:h-24 sm:h-24 md:h-32 lg:h-36 w-full mb-1">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-lg object-fill"
          />
        </div>
        <div className="pb-2  flex flex-col h-20 mb-2">
          <span className="text-gray-200 font-sans font-medium lg:text-[18px] xs:text-[14px] sm:text-[14px] md:text-[14px]">
            {title}
          </span>

          <span className="text-gray-300 text-[14px] ">
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
