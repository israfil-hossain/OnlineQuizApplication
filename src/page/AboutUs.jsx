import React from "react";
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import { Box, Breadcrumbs } from "@mui/material";
import { BsFillPatchExclamationFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div>
      <PackageBreadcrumb>
        <Breadcrumbs aria-label="breadcrumb">
          <Box sx={{ justifyContent: "center", display: "flex" }}>
            <BsFillPatchExclamationFill
              size={23}
              className="min-w-max text-emerald-500"
            />
            &nbsp; <span className="text-emerald-500">About Us</span>
          </Box>

          {/* <Typography color="grey">sdfgh</Typography> */}
        </Breadcrumbs>
      </PackageBreadcrumb>

      <div className="bg-white  my-10 w-full flex flex-col rounded-md shadow-md ">
        <div className="bg-emerald-400 rounded-t-md h-12 text-xl text-white font-bold font-sans  flex justify-center items-center">
          About Us
        </div>
        <div className="px-8 py-4 flex flex-col ">
          <span className="text-2xl font-medium font-sans py-2 text-emerald-500">
            Dear visitor ,{" "}
          </span>
          <span className="text-lg font-small font-sans ">
            {`Welcome to MRCS Aid (https://www.mrcsaid.com). It looks like you are interested to know more about
            MRCS Aid. We will be happier to share about us, our contents, goals, and feature plan with you.`}
          </span>
        </div>
        <div className="px-8 py-4 flex flex-col ">
          <span className="text-2xl font-medium font-sans py-2 text-emerald-500">
            Starting History and Goal{" "}
          </span>
          <span className="text-lg font-small font-sans ">
            {`Back in 2023, keeping in mind to provide best MRCS guideline to our users, we started our journey.
            When we started out, our (&quot;MRCS Aid&quot;) passion was and is to drive you to success by offering you the
            best Online Education. So that we can be a part of your success. We&#39;re dedicated to providing you with
            the best study material, special notes, mnemonics, recall questions with solution and mock test
            facilities. Still, we are trying to provide the best experience with our website &amp; mobile app.`}
          </span>
        </div>
        <div className="px-8 py-4 flex flex-col ">
          <span className="text-2xl font-medium font-sans py-2 text-emerald-500">
            Why MRCS Aid?{" "}
          </span>
          <span className="text-lg font-small font-sans ">
            {`
              This is a trillion dollar question! Already you know that, from the very beginning of our journey, we are
              trying hard to provide top-notch study materials to our users. It&#39;s our mission, it&#39;s our passion and it&#39;s
              our goal to help our users to pass MRCS-A on first attempt by providing the proper guideline to our
              users.`}
          </span>
        </div>
        <div className="px-8 py-4 flex flex-col ">
          <span className="text-2xl font-medium font-sans py-2 text-emerald-500">
            Future Plan
          </span>
          <span className="text-lg font-small font-sans ">
            {`
              According to our goal, we are continuously trying to improve our content and make it easiest for you to
              pass MRCS-A. We hope you have enjoyed our content as much as we enjoy offering them to you. If you
              have any questions or comments, please don&#39;t hesitate to Contact Us by E-mail. Feel free to share any
              recommendations, errors, or other information&#39;s. You are always welcome. We appreciate your time
              and patience. Thank you for reading about MRCS Aid.`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
