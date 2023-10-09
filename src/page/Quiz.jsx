//External Import
import React, { Fragment } from "react";
import { Box, Breadcrumbs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { BsBoxSeamFill, BsFillPatchQuestionFill } from "react-icons/bs";

//Internal Import
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import Card from "../components/common/Card";
import { API } from "../config/axiosConfig";
import NotFound from "../components/common/NotFound";
import { CommonProgress } from "../components/common/CommonProgress";

const Quiz = () => {
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");

  const { data, isLoading, isError } = useQuery(["myData", category], () =>
    API.get(`/quiz/quizbycategory?category=${category}`).then((res) => res.data)
  );

  return (
    <Fragment>
      <div>
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" to="/category">
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <BsBoxSeamFill
                  size={23}
                  className="min-w-max text-emerald-500"
                />
                <span className="text-emerald-400 ">&nbsp; All Category </span>
              </Box>
            </Link>
            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <BsFillPatchQuestionFill
                size={23}
                className="min-w-max text-emerald-700"
              />
              <span className="text-emerald-700 ">&nbsp; Mock Test </span>
            </Box>
            {/* <Typography color="grey">sdfgh</Typography> */}
          </Breadcrumbs>
        </PackageBreadcrumb>
        {isLoading ? (
          <CommonProgress />
        ) : (
          <div>
            {data ? (
              <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-5">
                {data?.map((item) => (
                  <Card
                    title={item?.quiz_name}
                    number={""}
                    image={item?.image}
                    desc={item?.quiz_description}
                    title2={"questions"}
                    link={`/questions?id=${item?.quiz_name}`}
                    key={item?._id}
                  />
                ))}
              </div>
            ) : (
              <NotFound />
            )}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Quiz;
