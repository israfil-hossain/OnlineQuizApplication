import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PopupModal from "./PopupModal";

const Card = ({
  image,
  title,
  number,
  title2,
  link,
  desc,
  disabled,
  height,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  if (!disabled) {
    return (
      <Link to={link}>
        <motion.div
          className={`cursor-pointer transition max-w-[300px] xs:min-w-[160px]  overflow-hidden duration-500 ease-in-out rounded-lg bg-white h-[290px] items-center text-center justify-center flex flex-col shadow-md backdrop-filter backdrop-blur-sm border
            border-emerald-200 hover:shadow-sm hover:shadow-emerald-600`}
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-full flex justify-start  top-0 -mt-2 ">
            <span className="bg-emerald-500 text-white px-5 rounded-r-full rounded-t-sm rounded-tl-[40px]  mt-2 text-sm items-start ">
              Free
            </span>
          </div>
          <div className="h-[240px] pb-4 mt-6 blur-0 flex justify-center items-center rounded-md  w-full mb-1">
            <img
              src={image}
              alt=""
              className="shadow-sm  shadow-emerald-700 w-40 h-36 xs:w-36 xs:h-36  border-[3px]  border-emerald-600 object-fill rounded-[30px] "
            />
          </div>
          <div className="w-full  border-b-2 border-solid border-slate-200 py-1"></div>
          <div className="p-2  flex flex-col  mb-2 h-[50px]">
            <span className="text-gray-800 font-sans font-bold lg:text-[16px] xs:text-[12px] sm:text-[14px] md:text-[14px]">
              {title.length > 18 ? title.substring(0, 18) + ".." : title}
            </span>

            <span className="text-black text-[12px] ">
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
          className={`cursor-pointer max-w-[300px] xs:min-w-[160px]  relative overflow-hidden
          h-[290px]  transition duration-500 ease-in-out rounded-lg bg-white  items-center text-center justify-center  flex flex-col  
          shadow-md  backdrop-filter backdrop-blur-sm border border-red-500 hover:shadow-md hover:shadow-emerald-700 ${
            disabled ? "opacity-60  bg-gray-600" : ""
          }`}
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-full flex justify-start top-0 -mt-2">
            <span className="bg-red-500 text-white px-5 rounded-r-full rounded-t-sm rounded-tl-[40px]  mt-2 text-sm items-start ">
              Paid
            </span>
          </div>
          <div className="blur-0 h-[240px] p-3  flex justify-center items-center rounded-md t w-full mb-1 pb-4 pt-2">
            <img
              src={image}
              alt=""
              className="shadow-sm  shadow-emerald-700 lg:w-40 lg:h-36 xs:w-36 xs:h-36  sm:w-32 sm:h-20  mt-4 border-[3px]  border-red-500 object-fill rounded-[30px] "
            />
          </div>
          <div className=" w-full border-b-2 border-solid border-slate-200 py-1"></div>
          <div className="p-2  flex flex-col  mb-2 h-[50px]">
            <span className="text-red-800 font-sans font-bold lg:text-[16px] xs:text-[12px] sm:text-[14px] md:text-[14px]">
              {title.length > 18 ? title.substring(0, 18) + ".." : title}
            </span>

            <span className="text-black text-[12px]">
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
