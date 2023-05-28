//Externals import ...............
import { Popover, List, ListItem } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { FiMoon, FiSun, FiMail, FiBell, FiUser } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

import { MdMenu } from "react-icons/md";

//Internal import .................
import { MenuContext } from "../../../context/MenuContext";
import AuthService from "../../../service/AuthService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { toggleMenu, isDarkMode, toggle_background } = useContext(MenuContext);

  const [mailAnchorEl, setMailAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [userAnchorEl, setUserAnchorEl] = useState(null);

  const handleMailClick = (event) => {
    setMailAnchorEl(event.currentTarget);
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleUserClick = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMailAnchorEl(null);
    setNotificationAnchorEl(null);
    setUserAnchorEl(null);
  };
  const handleLogout = async () => {
    AuthService.handleLogout();
  };
  const profile = localStorage.getItem("profile");

  return (
    <nav
      className={`sticky top-0 z-[999] bg-gradient-to-r from-emerald-200 via-emerald-500 to-emerald-300 text-white w-full flex items-center justify-between px-2 py-3 md:px-2 shadow-sm `}
    >
      {/* Left Sidebar */}
      <div className="flex items-center">
        <div
          className="w-8 h-8 bg-green-500   flex p-2 rounded-full mr-3 focus:bg-gray-400 hover:bg-green-600 shadow-md  "
          onClick={toggleMenu}
        >
          {" "}
          <MdMenu className="text-white" />
        </div>

        <div className="text-lg font-bold pl-2"> </div>
      </div>

      {/* Search Bar */}
      {/* <div className="flex-grow lg:mx-24 mx:4 lg:w-[70px]">
        <div className="relative text-gray-500 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FiSearch />
          </span>
          <input
            type="text"
            className="block w-full py-2 pl-10 pr-3 rounded-md placeholder-gray-400 bg-gray-800 focus:outline-none focus:bg-gray-700 focus:ring-0 focus:border-gray-700"
            placeholder="Search..."
          />
        </div>
      </div> */}

      {/* Right Side */}
      <div className="flex items-center">
        {/* Darkmode/Lightmode toggle */}
        <button
          className="flex items-center justify-center h-10 w-10 rounded-full text-white shadow-md hover:shadow-lg hover:shadow-emerald-600   hover:text-green-50 transition duration-150 focus:outline-none focus:ring-1 focus:ring-offset-green-100 focus:ring-green-500"
          onClick={toggle_background}
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Message Button */}
        <button
          className="flex items-center justify-center ml-4 h-10 w-10 rounded-full text-white hover:text-green-50 shadow-md hover:shadow-lg hover:shadow-emerald-600 transition duration-150 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-green-500"
          onClick={handleMailClick}
        >
          <FiMail />
        </button>

        {/* Notification Button */}
        <button
          className="flex items-center justify-center ml-4 h-10 w-10 rounded-full text-white  hover:text-green-50 shadow-md hover:shadow-lg hover:shadow-emerald-600 transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-green-500"
          onClick={handleNotificationClick}
        >
          <FiBell />
        </button>

        {/* Profile Button */}
        <button
          className="flex items-center justify-center ml-4 h-10 w-10 rounded-full text-white shadow-md hover:shadow-lg hover:shadow-emerald-600 hover:text-indigo-50 transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-green-500"
          onClick={handleUserClick}
        >
          { profile ? <img src={profile} alt="Profile" className="w-full h-full rounded-full px-1 py-1 border border-emerald-500"/> : <FiUser />}{/* <FiUser /> */}
        </button>
        <button className="flex items-center justify-center ml-4 h-10 w-10">
          {" "}
        </button>

        {/* Mail Popover  */}
        <Popover
          open={Boolean(mailAnchorEl)}
          anchorEl={mailAnchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <List>
            <ListItem>Mail 1</ListItem>
            <ListItem>Mail 2</ListItem>
          </List>
        </Popover>

        {/* Notification Popover */}
        <Popover
          open={Boolean(notificationAnchorEl)}
          anchorEl={notificationAnchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          PaperProps={{ style: { maxHeight: "300px", overflowY: "auto" } }}
        >
          <List>
            {Array.from(Array(20).keys()).map((index) => (
              <ListItem key={index}>Notification {index}</ListItem>
            ))}
          </List>
        </Popover>

        {/* User Popover  */}
        <Popover
          open={Boolean(userAnchorEl)}
          anchorEl={userAnchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <List sx={{ width: 200 }}>
            <Link to="/profile">
              <ListItem className="hover:bg-gray-200 ">
                <FaUserAlt className="mr-3 rounded-xl bg-gray-200 hover:bg-white p-1 w-6 h-6" />{" "}
                Profile
              </ListItem>
            </Link>
            <ListItem
              className="hover:bg-gray-200 cursor-pointer"
              onClick={handleLogout}
            >
              <TbLogout className="mr-3 rounded-xl bg-gray-200 p-1 hover:bg-white w-6 h-6" />{" "}
              Logout
            </ListItem>
          </List>
        </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
