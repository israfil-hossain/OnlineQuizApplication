//External Import
import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

//Internal Import
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";


import StudyService from "../service/StudyService";

import Card from "../components/common/Card";
import { BsBookFill } from "react-icons/bs";
const AllStudy = () => {
  const [data, setData] = useState([]);

  // Fetch User Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await StudyService.getStudy();
    console.log("Study Data ==>", res.data);
    setData(res.data);
  };
  console.log("All Study Data => ", data);

  return (
    <div>
      <PackageBreadcrumb>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="grey" href="/allstudy">
            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <BsBookFill size={23} className="min-w-max text-emerald-500" />
              <span className="text-emerald-400 ">&nbsp;All Study </span>
            </Box>
          </Link>
          {/* <Typography color="grey">sdfgh</Typography> */}
        </Breadcrumbs>
      </PackageBreadcrumb>
      <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-2 sm:grid-cols-1 mt-5">
      {data?.map((study,i)=>(
            <Card
            key={i}
            title={study?.study_name}
            image={study?.image}
            title2={study?.study_title}
            link={`/allstudy/study/${study?._id} `}
        />
        ))}
      </div>
    </div>
  );
};

export default AllStudy;
