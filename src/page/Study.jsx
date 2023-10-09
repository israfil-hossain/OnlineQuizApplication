//External Import
import React, { Fragment, useEffect, useState } from "react";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

//Internal Import
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import StudyService from "../service/StudyService";
import Card from "../components/common/Card";
import { BsBookFill } from "react-icons/bs";

const Study = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  // Fetch User Data
  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async () => {
    const res = await StudyService.singleStudy(id);

    setData(res.data);
  };

  return (
    <Fragment>
      <div>
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" to="/allstudy">
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <BsBookFill size={23} className="min-w-max text-emerald-500" />
                <span className="text-emerald-400 ">&nbsp;All Study </span>
              </Box>
            </Link>
            <Typography color="green">Study</Typography>
          </Breadcrumbs>
        </PackageBreadcrumb>
        <div className="w-full bg-white flex flex-col rounded-md justify-center items-center">
          <div className="flex justify-center items-center flex-col ">
            <span className="pt-5 text-2xl text-emerald-600 font-medium font-sans">
              {data?.study_name}
            </span>
            <span className="py-2 text-sm font-sans text-teal-400">
              🌟{data?.study_title}🌟
            </span>
          </div>
          <div className="flex justify-center items-center ">
            <img src={data?.image} alt="" className="w-60 h-48" />
          </div>
          <div className="flex flex-col justify-center items-center px-4 w-full mt-5 mx-auto">
            <div className="flex flex-col px-4 w-full mx-auto">
              <div className="text-lg text-emerald-500 font-medium font-sans mr-2 ">
                {"Description :"}
              </div>
              <div className="">{data?.study_description}</div>
            </div>
            <div className="w-full px-4 mt-5">
              {data?.text1 ? (
                <div dangerouslySetInnerHTML={{ __html: data?.text1 }} />
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="pb-10 pt-5 px-4">
            <span>👋 Take an Exam : </span>
            <Link to={data?.link}>
              <span className="text-blue-400">{data?.link}</span>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Study;
