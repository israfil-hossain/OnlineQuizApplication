import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { API } from "../config/axiosConfig";
import { CommonProgress } from "../components/common/CommonProgress";

import CommonButton from "../components/common/CommonButton";
import Card from "../components/common/Card";
import SliderService from "../service/SliderService";
import StudyService from "../service/StudyService";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [slider, setSlider] = useState([]);
  const [study, setStudy] = useState([]);
  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const response = await SliderService.getSlider();
        setSlider(response.data);
      } catch (error) {
        console.error("Error fetching slider:", error);
      }
    };
    const fetchStudy = async () => {
      try {
        const response = await StudyService.getStudy();
        setStudy(response.data);
      } catch (error) {
        console.log("Error fetching study:", error);
      }
    };

    fetchSlider();
    fetchStudy();
  }, []);

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
    return <div>Error fetching data </div>;
  }
  return (
    <div className="">
      <div className="grid lg:grid-cols-2 gap-5 md:grid-cols-2 sm:grid-cols-1">
        {slider?.map((slider, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-lg justify-center items-center p-4  flex flex-col w-full shadow-lg bg-opacity-30 backdrop-filter backdrop-blur-lg"
          >
            <div className="h-60 w-80 mb-8">
              <img
                src={slider?.imageUrl}
                alt=""
                className="w-full h-full object-contain rounded-md shadow-md shadow-green-100 my-5"
              />
            </div>
            <span className="text-xl text-emerald-600 font-sans justify-center flex items-center text-center font-normal px-5">
              {" 👋 "}
              {slider?.text}
            </span>
          </div>
        ))}
      </div>

      {/* Study material  */}
      <div className="w-full  mt-10 flex justify-between ">
        <span className="lg:text-xl xs:text-lg md:text-lg font-medium font-sans text-emerald-600 ">
          📚 Study Material
        </span>
        <Link to="/allstudy">
          <CommonButton color="secondary" width={130} height={40}>
            Show More
          </CommonButton>
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-3">
        {study?.slice(0, 8).map((study, i) => (
          <Card
            key={i}
            title={study?.study_name}
            image={study?.image}
            title2={study?.study_title}
            link={`/allstudy/study/${study?._id} `}
          />
        ))}
      </div>

      {/* popular quiz category */}
      <div className="w-full  mt-10 flex justify-between">
        <span className="lg:text-xl xs:text-lg md:text-lg font-medium font-sans text-emerald-600 ">
          ⭐ Popular Quiz 
        </span>
        <Link to="/allstudy">
          <CommonButton color="secondary" width={130} height={40}>
            Show More
          </CommonButton>
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-3">
        {data?.slice(0, 8).map((item) => (
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

export default Dashboard;
