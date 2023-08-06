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
import { CommonProgress } from "../components/common/CommonProgress";
import ShuffleArray  from "../constants/ShuffleArray";


const AllQuiz = () => {
  const [data, setData] = useState([]);
  const [userType, setUserType] = useState("");
  const id = localStorage.getItem("userid");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch User Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await QuizService.getQuiz();
        const suffleData = ShuffleArray(res.data);
        setData(suffleData);
        setIsLoading(false); // After fetching data, set isLoading to false
      } catch (error) {
        // Handle any error that might occur during data fetching
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set isLoading to false even if there's an error
      }
    };

    const getUserData = async () => {
      try {
        const res = await UserService.getSingleUser(id);
        setUserType(res?.data?.usertype);
      } catch (error) {
        // Handle any error that might occur while fetching user data
        console.error("Error fetching user data:", error);
      }
    };

    getUserData(id);
    fetchData();
  }, [id]);

  return (
    <div>
      <PackageBreadcrumb>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="grey" href="/category">
            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <MdOutlineQuiz size={23} className="min-w-max text-emerald-500" />
              <span className="text-emerald-400 ">&nbsp;All Mock Test </span>
            </Box>
          </Link>
        </Breadcrumbs>
      </PackageBreadcrumb>

      {isLoading ? (
        <div>
          <CommonProgress />
        </div>
      ) : (
        <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-5">
          {data.map((quiz, i) => (
            <Card
              key={i}
              title={quiz?.quiz_name}
              number={""}
              image={quiz?.image}
              title2={"Question"}
              link={`/questions?id=${quiz?.quiz_name}`}
              disabled={quiz?.accessibility === "paid" && userType === "unpaid"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllQuiz;
