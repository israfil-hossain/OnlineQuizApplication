//External Import
import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

//Internal Import
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import { MdOutlineQuiz } from "react-icons/md";

import QuizService from "../service/QuizService";

import Card from "../components/common/Card";
import UserService from "../service/UserService";
const AllQuiz = () => {
  const [data, setData] = useState([]);
  const [userType, setUserType] = useState('');
  const id = localStorage.getItem("userid"); 

  // Fetch User Data
  useEffect(() => {
    const getUserData = async () =>{
      const res = await UserService.getSingleUser(id);
      setUserType(res?.data?.usertype);
    }
    getUserData(id);
    fetchData();
  }, [id]);
  
  const fetchData = async () => {
    const res = await QuizService.getQuiz();
    console.log("Quiz Data ==>", res.data);
    setData(res.data);
  };
  console.log("All Quiz Data => ", data);

  

  return (
    <div>
      <PackageBreadcrumb>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="grey" href="/category">
            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <MdOutlineQuiz size={23} className="min-w-max text-emerald-500" />
              <span className="text-emerald-400 ">&nbsp;All Quiz </span>
            </Box>
          </Link>
          {/* <Typography color="grey">sdfgh</Typography> */}
        </Breadcrumbs>
      </PackageBreadcrumb>
      <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-2 sm:grid-cols-1 mt-5">
        {data?.map((quiz, i) => (
          <Card
            key={i}
            title={quiz?.quiz_name}
            number={""}
            image={quiz?.image}
            title2={"Question"}
            link={`/questions?id=${quiz?.quiz_name}`}
            disabled={quiz?.accessibility === 'paid' && userType === 'unpaid'}
          />
        ))}
      </div>
    </div>
  );
};

export default AllQuiz;
