//Externals import ...............
import { Popover, List, ListItem } from "@mui/material";
import React, { useContext, useState } from "react";
import { FiUser } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

import { MdMenu } from "react-icons/md";

//Internal import .................
import { MenuContext } from "../../../context/MenuContext";
import AuthService from "../../../service/AuthService";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { toggleMenu } = useContext(MenuContext);

  const [userAnchorEl, setUserAnchorEl] = useState(null);

  const handleUserClick = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setUserAnchorEl(null);
  };
  const handleLogout = async () => {
    AuthService.handleLogout();
  };
  const profile = localStorage.getItem("profile");

  return (
    <nav
       className={`sticky top-0  bg-gradient-to-r from-emerald-200 via-emerald-500 to-emerald-300 text-white w-full flex items-center justify-between px-2 py-3 md:px-2 shadow-sm `}
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

        <div className="text-lg text-primary font-bold pl-2">MRCS AID </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center">
        {/* Profile Button */}
        <button
          className="flex items-center justify-center ml-4 h-10 w-10 rounded-full text-white shadow-md hover:shadow-lg hover:shadow-emerald-600 hover:text-indigo-50 transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-green-500"
          onClick={handleUserClick}
        >
          {profile ? (
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full rounded-full px-1 py-1 border border-emerald-500"
            />
          ) : (
            <FiUser />
          )}
          {/* <FiUser /> */}
        </button>
        <button className="flex items-center justify-center ml-4 h-10 w-10">
          {" "}
        </button>

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
