import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PopupModal from "./PopupModal";

const Card = ({ image, title, number, title2, link, desc, disabled,height }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  if (!disabled) {
    return (
      <Link to={link}>
        <motion.div
          className={`cursor-pointer transition duration-500 ease-in-out rounded-lg bg-white h-[250px] items-center text-center justify-center flex flex-col shadow-md backdrop-filter backdrop-blur-sm border
            border-emerald-200 hover:shadow-md hover:shadow-emerald-300`}
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex justify-center items-center rounded-md t w-full mb-1">
            <img
              src={image}
              alt=""
              className="w-32 h-32 mt-4 border-2 border-s-fuchsia-50 border-gray-400 object-fill rounded-full "
            />
          </div>

          <div className="p-2  flex flex-col  mb-2 h-[60%]">
            <div className=" w-full border-b-2 border-solid border-slate-50 py-1"></div>
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
    <>
      <div
        className="relative"
        title="Attempt this question please buy Subscription account"
        onClick={() => setIsModalOpen(true)}
      >
        <motion.div
          className={`cursor-pointer max-w-[300px] 
      max-h-[350px]  transition duration-500 ease-in-out rounded-lg bg-white h-auto items-center text-center justify-center  flex flex-col  
      shadow-md  backdrop-filter backdrop-blur-sm border border-red-400 hover:shadow-md hover:shadow-emerald-700 ${
        disabled ? "opacity-60  bg-gray-600" : ""
      }`}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex justify-center items-center rounded-md xs:h-24 sm:h-24 md:h-32 lg:min-h-[180px] border-7 border-transparent w-full mb-1">
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
      {isModalOpen && <PopupModal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
};

export default Card;
