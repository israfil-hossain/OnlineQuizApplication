//External Import
import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { debounce } from "lodash";

//Internal Import
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import CustomSearchField from "../components/common/SearchField";


import QuestionService from "../service/QuestionService";
import CommonTable from "../components/common/CommonTable";
import resultHeader from "../constants/resultHeader";
import { BsTrophyFill } from "react-icons/bs";

const Results = () => {
  const [data , setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const userid = localStorage.getItem("userid"); 

  // Fetch User Data
  useEffect(() => {
    fetchData(userid);
  }, [userid]);

  const fetchData = async () => { 
    const res = await QuestionService.getResult(userid);
   
    setData(res?.data?.results);
  };
  const handleSearchQueryChange = debounce((query) => {
    setSearchQuery(query);
  }, 500);

  console.log("Data is ", data);

  const filteredData = data?.filter((result) =>
    result.quizName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <PackageBreadcrumb>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="grey" href="/">
            <Box sx={{ justifyContent: "center", display: "flex",color:"green",fontSize:"16px",fontWeight:"600"}}>
              <BsTrophyFill size={23} className="min-w-max text-emerald-500" />
              &nbsp; Result
            </Box>
          </Link>
          {/* <Typography color="grey">sdfgh</Typography> */}
        </Breadcrumbs>
      </PackageBreadcrumb>
      <Stack
        direction={{
          lg: "row",
          xs: "column",
          sm: "column",
          md: "row",
        }}
        justifyContent={"space-between"}
      >
        {/* Search Box  */}
        <CustomSearchField
          name={"Search by QuizName"}
          onChange={handleSearchQueryChange}
        />
       
      </Stack>
      <div className="pt-5">
        <CommonTable   columns={resultHeader} data={filteredData} typeData={"result"} onDeleted={fetchData}/>
        
      </div>
    </div>
  );
};

export default Results;
