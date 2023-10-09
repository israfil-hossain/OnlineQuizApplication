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
import { BsFillPatchQuestionFill, BsPatchQuestionFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { API } from "../config/axiosConfig";
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import QuestionService from "../service/QuestionService";
import ViewQuestions from "../components/Questions/ViewQuestions";
import { Progress } from "../components/common/Progress";
import { Link } from "react-router-dom";
import NotFound from "../components/common/NotFound";
import { CommonProgress } from "../components/common/CommonProgress";

const Questions = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  const [questions, setQuestions] = useState([]);
  const [items, setItems] = useState([]);
  const [qid, setQid] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [isloading2, setIsLoading2] = useState(false);

  const [open, setOpen] = useState(false);
  const userid = localStorage.getItem("userid");
  const username = localStorage.getItem("username");

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleClose = () => setOpen(false);

  const handleValueChange = (questionId, selectedValue) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.question_id === questionId
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].selected_value = selectedValue;
        return updatedItems;
      } else {
        const question = questions.find(
          (question) => question._id === questionId
        );
        if (!question) return prevItems;

        const newItem = {
          question_id: questionId,
          selected_value: selectedValue,
        };
        return [...prevItems, newItem];
      }
    });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const payload = {
        userId: userid,
        username: username, // Include the user ID in the payload
        items: items,
        quizName: id,
      };

      const allQuestionsAnswered = questions.every((question) =>
        items.some(
          (item) =>
            item.question_id === question._id && item.selected_value !== ""
        )
      );

      if (!allQuestionsAnswered) {
        // You can show an error message or highlight the unanswered questions
        alert(
          "Please make sure fill-up every question answer, otherwise you can't Submit"
        );
        setIsLoading(false);
        return;
      } else {
        const response = await QuestionService.addResult(payload);
        if (response.status === 200) {
          setQid(response?.data?.resultdata?._id);
          setOpen(true);
          setIsLoading(false);
        } else {
          console.log("Something went wrong");
        }
      }
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading2(true);
      try {
        const response = await API.get(`/questions/questionbyquiz?quiz=${id}`);
        const shuffledArray = shuffleArray([...response.data]);
        setQuestions(shuffledArray);
        setIsLoading2(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setIsLoading2(false);
      }
    };

    fetchQuestions();
  }, [id]);

  return (
    <Fragment>
      <div>
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" to="/allquiz">
              <Box
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  color: "green",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                <BsFillPatchQuestionFill
                  size={23}
                  className="min-w-max text-emerald-500"
                />
                &nbsp; Question
              </Box>
            </Link>
            <Typography color="grey">{id}</Typography>
            <Typography>
              {"Total Questions : "}
              {questions.length}
            </Typography>
          </Breadcrumbs>
        </PackageBreadcrumb>

        {isloading2 ? (
          <CommonProgress />
        ) : (
          <div>
            {questions && questions.length > 1 ? (
              <div className="mx-1">
                {questions.map((question, index) => (
                  <Card
                    sx={{
                      maxWidth: "100%",
                      margin: "auto",
                      marginTop: 5,
                      "@media screen and (min-width: 768px)": {
                        maxWidth: "80%",
                      },
                      padding: "12px",
                    }}
                    key={question._id}
                  >
                    <div className="text-[16px] font-sans font-medium  text-start py-5 lg:px-5 flex">
                      <span className="p-4 flex items-center justify-center rounded-full bg-emerald-600 text-white  mx-2 my-2 w-5 h-5 ">
                        {index + 1}
                      </span>
                      <span className="pt-2">{question.question_name}</span>
                    </div>
                    {question.image ? (
                      <div className="flex justify-center w-full h-48">
                        <img src={question.image} alt="" />
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="w-full py-5 justify-center items-center flex">
                      <FormControl component="fieldset">
                        <RadioGroup
                          className="flex justify-center items-center"
                          aria-label={`question_${question._id}`}
                          name={`question_${question._id}`}
                          value={
                            items.find(
                              (item) => item.question_id === question._id
                            )?.selected_value || ""
                          }
                          onChange={(e) =>
                            handleValueChange(question._id, e.target.value)
                          }
                        >
                          <div className=" justify-center lg:ml-8 items-center flex flex-wrap w-full gap-5 p-2">
                            {Object.entries(question.options[0])
                              .filter(([key]) => key.startsWith("option_"))
                              .map(([key, value], optionIndex) => (
                                <div
                                  key={optionIndex}
                                  className={`border-2 border-green-200 w-72 px-5 rounded-md mx-5 ${
                                    items.find(
                                      (item) =>
                                        item.question_id === question._id &&
                                        item.selected_value === key
                                    )
                                      ? "bg-green-50"
                                      : ""
                                  }`}
                                >
                                  <FormControlLabel
                                    value={key}
                                    control={
                                      <Radio sx={{ color: "#6c63ff" }} />
                                    }
                                    label={
                                      <Box
                                        sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "space-between",
                                          width: "100%",
                                          textAlign: "start",
                                        }}
                                      >
                                        <Typography
                                          sx={{
                                            fontSize: 14,
                                            paddingTop: 1,
                                            paddingBottom: 1,
                                          }}
                                        >
                                          {value}
                                        </Typography>
                                      </Box>
                                    }
                                  />
                                </div>
                              ))}
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </Card>
                ))}
                <div className="justify-center items-center flex mt-5">
                  <button
                    className="bg-gradient-to-r from-green-300 via-emerald-500 to-emerald-600 hover:from-emerald-600
              hover:via-emerald-400 hover:to-green-300 
                font-semibold  border px-12 py-2  text-white rounded-full flex "
                    type="submit"
                    onClick={handleSubmit}
                  >
                    {isloading ? (
                      <>
                        <Progress />
                        &nbsp;{" "}
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
                <ViewQuestions open={open} onClose={handleClose} id={qid} />
              </div>
            ) : (
              <div>
                <NotFound />
              </div>
            )}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Questions;
