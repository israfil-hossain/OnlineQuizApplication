import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ image, title, number, title2, link, desc, disabled }) => {

  if (!disabled) {
    return (
      <Link to={link}>
        <motion.div
          className="cursor-pointer transition duration-500 ease-in-out rounded-lg bg-white lg:h-64 sm:h-48 xs:h-48 md:h-60 items-center text-center justify-center  flex flex-col  
          shadow-md bg-opacity-40 backdrop-filter backdrop-blur-sm border border-emerald-100 hover:shadow-md hover:shadow-emerald-100"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex  justify-center items-center   xs:h-24 sm:h-24 md:h-32 lg:h-36 sm:w-40 xs:w-40 lg:w-64 lg:mt-3  mb-5">
            <img
              src={image}
              alt=""
              className="w-full h-full rounded-md object-fill"
            />
          </div>
          <div className="pb-2  flex flex-col h-24 mb-3">
            <span className="text-emerald-600 font-sans font-medium lg:text-xl xs:text-sm md:text-sm">
              {title}
            </span>

            <span className="text-emerald-600 lg:text-md xs:text-sm mt-2">
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
      </Link>
    );
  }
  return (
    <div className="cursor-not-allowed">
      <motion.div
        className={`cursor-pointer transition duration-500 ease-in-out rounded-lg bg-white h-64 items-center text-center justify-center gap-4 flex flex-col pt-3 
      shadow-md bg-opacity-40 backdrop-filter backdrop-blur-sm border border-emerald-100 hover:shadow-md hover:shadow-emerald-100 ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex  justify-center items-center  my-3 h-20 w-24 ">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-md object-contain"
          />
        </div>
        <div className="pb-2  flex flex-col h-24 mb-3">
          <span className="text-emerald-600 font-sans font-medium text-xl">
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
