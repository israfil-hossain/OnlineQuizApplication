//External Import
import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai";
import { LoadingButton } from "@mui/lab";
import { debounce } from "lodash";

//Internal Import
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";

import CategoryService from "../service/CategoryService";
import Card from "../components/common/Card";
import { background2, background3, design3, design4 } from "../assets/image";
import { BsBoxSeamFill } from "react-icons/bs";
import { API } from "../config/axiosConfig";
import { useQuery } from "react-query";
const Category = () => {
  const { data, isLoading, isError } = useQuery("myData", () =>
    API.get("/category").then((res) =>
      res.data.filter((item) => item.cat_status === "active")
    )
  );

  return (
    <div>
      <PackageBreadcrumb>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="grey" href="/category">
            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <BsBoxSeamFill size={23} className="min-w-max text-emerald-500" />
              <span className="text-emerald-400 ">&nbsp; All Category </span>
            </Box>
          </Link>
          {/* <Typography color="grey">sdfgh</Typography> */}
        </Breadcrumbs>
      </PackageBreadcrumb>
      <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-5">
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
  );
};

export default Category;
