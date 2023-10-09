import React, { Fragment } from "react";
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import { Box, Breadcrumbs } from "@mui/material";
import { BsFillPatchExclamationFill } from "react-icons/bs";

const TermsCondition = () => {
  return (
    <Fragment>
      <div>
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <BsFillPatchExclamationFill
                size={23}
                className="min-w-max text-emerald-500"
              />
              &nbsp;{" "}
              <span className="text-emerald-500">Terms & Conditions</span>
            </Box>
          </Breadcrumbs>
        </PackageBreadcrumb>

        <div className="bg-white  my-10 w-full flex flex-col rounded-md shadow-md ">
          <div className="bg-emerald-400 rounded-t-md h-12 text-xl text-white font-bold font-sans  flex justify-center items-center">
            Terms & Conditions
          </div>
          <div className="px-8 py-4 flex flex-col ">
            <span className="text-2xl font-medium font-sans py-2 text-emerald-500">
              Introduction{" "}
            </span>
            <span className="text-lg font-small font-sans ">
              {`Welcome to MRCS Aid
              These Terms of Service govern your use of our website located at www.mrcsaid.com (together
              or individually “Service”) operated by MRCS Aid.
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard
              and disclose information that results from your use of our web pages.
              Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You
              acknowledge that you have read and understood Agreements, and agree to be bound of them.
              If you do not agree with (or cannot comply with) Agreements, then you may not use the Service,
              but please let us know by emailing at contact@mrcsaid.com so we can try to find a solution.
              These Terms apply to all visitors, users and others who wish to access or use Service.`}
            </span>
          </div>
          <div className="px-8 py-4 flex flex-col ">
            <span className="text-2xl font-medium font-sans py-2 text-emerald-500">
              Communications{" "}
            </span>
            <span className="text-lg font-small font-sans ">
              {`By using our Service, you agree to subscribe to newsletters, marketing or promotional materials
              and other information we may send. However, you may opt out of receiving any, or all, of these
              communications from us by following the unsubscribe link or by emailing at
              contact@mrcsaid.com.
            `}
            </span>
          </div>
          <div className="px-8 py-4 flex flex-col ">
            <span className="text-2xl font-medium font-sans py-2 text-emerald-500">
              Why MRCS Aid?{" "}
            </span>
            <span className="text-lg font-small font-sans ">
              {`
              This is a trillion dollar question! Already you know that, from the very beginning of our journey, we are
              trying hard to provide top-notch study materials to our users. It is our mission, it is our passion and it is
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
              have any questions or comments, please don't hesitate to Contact Us by E-mail. Feel free to share any
              recommendations, errors, or other information's. You are always welcome. We appreciate your time
              and patience. Thank you for reading about MRCS Aid.`}
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TermsCondition;
