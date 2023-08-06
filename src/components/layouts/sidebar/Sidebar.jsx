import { useEffect, useState, useContext } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MenuContext } from "../../../context/MenuContext";

// * React icons

import { AiFillTrophy, AiOutlineAppstore } from "react-icons/ai";
import { BsBoxSeam, BsPassFill, BsPatchExclamationFill, BsPerson, BsQuestionDiamondFill } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import logo from "../../../assets/mrcs.png";
import { MdOutlineQuiz } from "react-icons/md";


const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();


  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [isTabletMid, pathname]);

  const location = useLocation();

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <>
      <div
        onClick={toggleMenu}
        className={`md:hidden fixed inset-0 min-h-screen z-[998] bg-green/50 ${
          isOpen ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className=" bg-white  text-green-500 shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
          overflow-hidden md:relative fixed
       h-screen "
      >
        <Link to="/">
          <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3 z-50 bg-white">
            <img src={logo} width={45} alt="logo" />
            <span className="text-2xl text-emerald-500 font-sans font-bold ">
              MRCS AID
            </span>
          </div>
        </Link>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link text-green-400">
                <AiOutlineAppstore
                  size={23}
                  className="min-w-max text-green-400"
                />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to={"/category"} className="link text-green-400">
                <BsBoxSeam size={23} className="min-w-max text-green-300" />
                Category
              </NavLink>
            </li>

            <li>
              <NavLink to={"/allquiz"} className="link text-green-400">
                <MdOutlineQuiz size={23} className="min-w-max text-green-300" />
                Mock Test
              </NavLink>
            </li>
            {location.pathname.startsWith("/questions") && (
              <li>
                <NavLink to="/questions" className="link text-green-400">
                  <BsQuestionDiamondFill
                    size={23}
                    className="min-w-max text-green-300"
                  />
                  Questions
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to={"/allstudy"} className="link text-green-400">
                <GiBlackBook size={23} className="min-w-max text-green-300" />
                Study
              </NavLink>
            </li>
            <li>
              <NavLink to={"/results"} className="link text-green-400">
                <AiFillTrophy size={23} className="min-w-max text-green-300" />
                Result
              </NavLink>
            </li>

            <li>
              <NavLink to={"/profile"} className="link text-green-400">
                <BsPerson size={23} className="min-w-max text-green-300" />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={"/aboutus"} className="link text-green-400">
                <BsPatchExclamationFill size={23} className="min-w-max text-green-400 " />
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to={"/terms"} className="link text-green-400">
                < BsPassFill size={23} className="min-w-max text-green-400 " />
                Terms & Cond..
              </NavLink>
            </li>

           

            
          </ul>
        </div>
        {/* <motion.div
          onClick={() => {
            // setOpen(!open);
            toggleMenu(!isOpen);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute text-gray-400 w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          {isOpen ? (
            <IoIosArrowBack size={35} />
          ) : (
            <IoIosArrowForward size={35} />
          )}
        </motion.div> */}
      </motion.div>
    </>
  );
};

export default Sidebar;
