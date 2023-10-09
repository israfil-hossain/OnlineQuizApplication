import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import {
  BsFillEyeFill,
  BsPatchQuestionFill,
  BsTrophyFill,
} from "react-icons/bs";

import PackageBreadcrumb from "../components/common/PackageBreadcrumb";

import { Link } from "react-router-dom";
import { congratulation } from "../assets/image";
import { useParams } from "react-router-dom/dist";
import QuestionService from "../service/QuestionService";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";

import Confetti from "react-confetti";
import { CommonProgress } from "../components/common/CommonProgress";

const ViewResult = () => {
  const { id } = useParams();
  const [isConfettiActive, setIsConfettiActive] = useState(true);

  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        setIsLoading(true);
        const response = await QuestionService.getResultbyId(id);
        setResult(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
      setIsLoading(false);
    };

    fetchResult();
  }, [id]);

  useEffect(() => {
    // Start a timer to disable the confetti after 3 seconds
    const timer = setTimeout(() => {
      setIsConfettiActive(false);
    }, 15000); // 3000 milliseconds = 3 seconds

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const passingPercentage = 65;

  const passingMark = (passingPercentage / 100) * result?.results?.length;

  return (
    <Fragment>
      <div>
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" to="/results">
              <Box
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  color: "green",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                <BsTrophyFill
                  size={23}
                  className="min-w-max text-emerald-500"
                />
                &nbsp; Result
              </Box>
            </Link>
            <Box
              sx={{
                justifyContent: "center",
                display: "flex",
                color: "green",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <BsFillEyeFill size={23} className="min-w-max text-emerald-400" />
              &nbsp; View Result
            </Box>
          </Breadcrumbs>
        </PackageBreadcrumb>
        {isLoading ? (
          <CommonProgress />
        ) : (
          <>
            {isConfettiActive && (
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={true}
              />
            )}
            <div className="w-full  bg-gradient-to-r from-emerald-400 to-teal-300 rounded-md mt-8">
              <div className="flex lg:flex-row md:flex-row sm:flex-row justify-center xs:items-center lg:space-x-16  sm:space-x-8 md:space-x-12 xs:flex-col">
                <img
                  src={congratulation}
                  alt=""
                  className="w-24 h-24 rounded-full  bg-teal-500 mt-5"
                />
                <div className="flex flex-col m-4">
                  <span className="md:lg:sm:text-2xl xs:text-lg xs:text-center md:lg:sm:text-start font-bold font-sans text-indigo-500  mb-2">
                    {result?.quizName}
                  </span>
                  <hr />
                  {result?.totalScore >= passingMark ? (
                    <span className="md:lg:sm:text-2xl xs:text-lg font-bold font-sans text-orange-400 py-2 ">
                      {" "}
                      🚩 You are Passed ! 😊
                    </span>
                  ) : (
                    <span className="md:lg:sm:text-2xl xs:text-lg font-bold font-sans text-red-500 py-2 ">
                      {" "}
                      😑 Don't worry! You will do better on retake,InshaAllah
                    </span>
                  )}

                  <div className="flex">
                    <span className="md:lg:sm:text-2xl xs:text-lg font-bold font-sans text-white ">
                      Your Score is
                    </span>
                    <span className="md:lg:sm:text-2xl xs:text-xl font-bold font-sans text-pink-500 px-4">
                      {" "}
                      {result?.totalScore}/{result?.results?.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {result?.results?.map((items, i) => (
                <div key={i}>
                  <div key={items?.questionData?._id}>
                    <Card
                      sx={{
                        maxWidth: "90%",
                        margin: "auto",
                        marginTop: 5,
                        padding: "12px",
                      }}
                    >
                      <div className="flex items-center">
                        <div className="text-[16px] font-sans font-medium  text-start py-5 lg:px-5 flex">
                          <span className="p-4 flex items-center justify-center rounded-full bg-emerald-600 text-white  mx-2 my-2 w-5 h-5 ">
                            {i + 1}
                          </span>
                          <span className="pt-2">
                            {items?.questionData?.question_name}
                          </span>
                        </div>
                      </div>
                      <div className="px-10 ">
                        {items?.image ? (
                          <div className="flex justify-center items-center w-full h-48">
                            <div className="w-64 h-52 rounded-md">
                              <img
                                src={items?.questionData?.image}
                                alt=""
                                className="w-full h-full object-contain rounded-lg "
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                        <div className="w-full py-5">
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label={`question_${items?.questionData?._id}`}
                              name={`question_${items?.questionData?._id}`}
                              value={
                                Array.isArray(items)
                                  ? items.find(
                                      (item) =>
                                        item?.question ===
                                        items?.questionData?._id
                                    )?.selected_value || ""
                                  : ""
                              }
                            >
                              <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 w-full gap-5">
                                {Object.entries(items?.questionData?.options[0])
                                  .filter(([key]) => key.startsWith("option_"))
                                  .map(([key, value], optionIndex) => {
                                    const isSelect =
                                      key === items?.selected_value;

                                    const isAnswer =
                                      key === items?.questionData?.answer;

                                    return (
                                      <div
                                        key={optionIndex}
                                        className={`border-2 border-green-200  px-4 xs:w-[250px] sm:w-[260px] md:[270px] lg:w-[350px] rounded-md mx-5 ${
                                          isAnswer
                                            ? "bg-green-300"
                                            : "bg-red-100"
                                        }`}
                                      >
                                        <FormControlLabel
                                          value={key}
                                          control={
                                            <Radio
                                              sx={{ color: "#6c63ff" }}
                                              checked={isSelect}
                                            />
                                          }
                                          label={
                                            <Box
                                              sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                width: "100%",
                                              }}
                                            >
                                              <Typography>{value}</Typography>
                                              {isSelect && (
                                                <div>
                                                  {isSelect === isAnswer ? (
                                                    <BiCheck className="text-emerald-500 ml-5 w-5 h-5" />
                                                  ) : (
                                                    <AiFillCloseCircle className="text-red-500 ml-5 w-5 h-5 " />
                                                  )}
                                                </div>
                                              )}
                                            </Box>
                                          }
                                        />
                                      </div>
                                    );
                                  })}
                              </div>
                            </RadioGroup>
                          </FormControl>
                        </div>

                        <div className="px-5 pt-2 ">
                          <span className="font-sans font-medium  text-md text-emerald-600 ">
                            Description :
                          </span>

                          {items?.questionData?.answer &&
                          items?.questionData?.answer in
                            items?.questionData?.options ? (
                            <span>
                              {
                                items?.questionData?.options[
                                  items?.questionData?.answer
                                ]
                              }
                            </span>
                          ) : (
                            <span></span>
                          )}
                        </div>
                        <div className="px-5 py-3">
                          <span className="text-md font-sans font-normal">
                            💡 {items?.questionData?.qus_description}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default ViewResult;
