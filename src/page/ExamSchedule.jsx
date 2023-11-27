import React, { Fragment, useEffect, useState } from "react";
import ControlService from "../service/ControlService";
import DangerousHTMLComponent from "../components/common/DangerHtml";

const ExamSchedule = () => {
  const [control, setControl] = useState([]);

  useEffect(() => {
    const fetchControl = async () => {
      try {
        const response = await ControlService.getControl();
        const activeControl = response.data.filter(
          (item) => item.status === "active"
        );
        setControl(activeControl);
      } catch (error) {
        console.error("Error fetching slider:", error);
      }
    };

    fetchControl();
  }, []);
  return (
    <Fragment>
      <div className="xl:px-12 xs:px-5 lg:px-10 bg-white rounded-xl p-5 ">
        <DangerousHTMLComponent htmlContent={control[0]?.text} />
      </div>
    </Fragment>
  );
};

export default ExamSchedule;
