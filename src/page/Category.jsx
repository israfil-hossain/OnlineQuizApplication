//External Import
import React, { Fragment } from "react";
import { Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

//Internal Import
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";

import Card from "../components/common/Card";
import { BsBoxSeamFill } from "react-icons/bs";
import { API } from "../config/axiosConfig";
import { useQuery } from "react-query";
import { CommonProgress } from "../components/common/CommonProgress";
import NotFound from "../components/common/NotFound";

const Category = () => {
  const { data, isLoading, isError } = useQuery("myData", () =>
    API.get("/category").then((res) =>
      res.data.filter((item) => item.cat_status === "active")
    )
  );
  if (isLoading) {
    return (
      <div>
        <CommonProgress />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }
  return (
    <Fragment>
      <div>
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" href="/category">
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <BsBoxSeamFill
                  size={23}
                  className="min-w-max text-emerald-500"
                />
                <span className="text-emerald-400 ">
                  &nbsp; Exam Categories{" "}
                </span>
              </Box>
            </Link>
            {/* <Typography color="grey">sdfgh</Typography> */}
          </Breadcrumbs>
        </PackageBreadcrumb>
        <div className="grid lg:grid-cols-5 gap-6 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-5">
          {data?.map((item) => (
            <Card
              title={item?.cat_name}
              number={""}
              image={item?.image}
              title2={"quizes"}
              link={`/category/quiz?category=${item?.cat_name}`}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Category;
