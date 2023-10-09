//External Import
import React, { Fragment, useEffect, useState } from "react";
import { Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

//Internal Import
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import UserService from "../service/UserService";

import { FaUserAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { HiOutlineKey } from "react-icons/hi";

import AddUser from "../components/Users/AddUser";
import ChangePassword from "../components/Users/ChangePassword";
import { Profile } from "../assets";
const User = () => {
  const userid = localStorage.getItem("userid");

  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [popen, setPopen] = useState(false);
  const handlePOpen = () => setPopen(true);
  const handlePClose = () => setPopen(false);

  // Define the fetchData function outside the useEffect hook
  const fetchData = async (userId) => {
    try {
      const res = await UserService.getSingleUser(userId);
      return res.data;
    } catch (error) {
      // Handle the error here, e.g., log the error or show a user-friendly message.
      console.error("Error fetching user data:", error);
      throw error; // Re-throw the error to allow the caller to handle it if needed.
    }
  };

  // Inside your functional component
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchData(userid);
        setData(userData);
      } catch (error) {
        // Handle the error here or display an error message to the user.
      }
    };

    getUserData(); // Call the function to fetch and update user data
  }, [userid]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    uploadImage(file);
  };
  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      // Replace 'PUT_API_ENDPOINT' with the actual API endpoint URL for image upload
      await UserService.UploadImage(data?._id, formData);
      toast.success("Profile Image Upload Successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Fragment>
      <div>
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" href="/">
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <FaUserAlt size={23} className="min-w-max text-emerald-500" />
                &nbsp; Profile
              </Box>
            </Link>
          </Breadcrumbs>
        </PackageBreadcrumb>

        <div className="mt-10">
          <div className="lg:flex  justify-around   rounded-md px-4 py-4 w-full ">
            <div className="lg:flex hidden">
              <img src={Profile} alt="profile" width={500} height={100} />
            </div>
            <div className="lg:w-1/2 rounded-xl px-4 py-4 bg-white">
              <div className="w-full">
                <MdEdit
                  className="cursor-pointer w-10 h-10 rounded-full bg-teal-600 hover:bg-teal-500 px-2 py-2 text-white mr-2 float-right"
                  onClick={handleOpen}
                />
              </div>
              <div className="md:lg:ml-5 py-4 flex justify-center items-center relative">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="profileImage"
                    className="w-48 h-48 rounded-full border border-emerald-500"
                  />
                ) : (
                  <div className="w-48 h-48 rounded-full border border-emerald-500 bg-gray-200 flex justify-center items-center">
                    <img
                      src={
                        data?.profile
                          ? data?.profile
                          : "https://res.cloudinary.com/dpc1nydxn/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1685778058/Flowentech/about2_ap8hdw.jpg"
                      }
                      alt="profileImage"
                      className="w-48 h-48 rounded-full border border-emerald-500"
                    />
                  </div>
                )}
                <div className="flex space-x-2 text-sm mt-24">
                  <label htmlFor="imageUpload">
                    <BiEdit className="text-gray-200 w-6 h-6 -ml-5 cursor-pointer" />
                  </label>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              <div className=" px-4 py-2 rounded-md  flex flex-col justify-center items-center w-full bg-slate-200">
                <span className="md:lg:font-bold sm:font-semibold  font-sans text-2xl text-emerald-500 ">
                  {data?.name}
                </span>

                <span className="font-medium font-sans md:lg:text-xl sm:text-lg xs:text-md text-emerald-500 py-2">
                  {data?.email}
                </span>

                <span className="font-medium font-sans text-lg text-emerald-500 py-2">
                  {data?.mobile}
                </span>
                <button
                  className="
                lg:hover:bg-teal-400 lg:hover:text-white xs:hover:text-emerald-600 font-normal md:lg:text-lg xs:text-sm sm:text-md md:border lg:border border-emerald-600  md:lg:px-4 py-1  text-emerald-600 rounded-full flex my-2"
                  type="submit"
                  onClick={handlePOpen}
                >
                  <HiOutlineKey className="w-6 h-6 rounded-full bg-purple-500 px-1 py-1 text-white mr-2" />{" "}
                  {"Change Password"}
                </button>
              </div>
            </div>
          </div>
          <ChangePassword
            open={popen}
            data={data}
            onClose={handlePClose}
            fetchData={fetchData}
          />
          <AddUser
            data={data}
            open={open}
            onClose={handleClose}
            fetchData={fetchData}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default User;
