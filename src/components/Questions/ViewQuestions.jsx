import React,{Fragment} from "react";
import {
  Backdrop,
  Box,
  Fade,
  Modal,

} from "@mui/material";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "350px",
  bgcolor: "background.paper",
  border: "2px solid #F7FDFF",
  borderRadius: "10px",
  boxShadow: `3px 2px 3px 1px rgba(0, 0, 0, 0.2)`,
  p: 4,
  maxHeight: "90vh",
 
  overflow: "auto",
};
const ViewQuestions = ({ open, onClose, id }) => {
  const handleResetAndClose = () => {
    onClose();
  };
  

  return (
    <Fragment>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={false}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box
            sx={{
              pb: 0,
              float: "right",
              width: "50px",
            }}
          >
          </Box>

          <div className=" mt-10 flex justify-center text-center">
            <div className="flex flex-col justify-center items-center">
              <BsFillPatchCheckFill className="w-14 h-14 my-3 text-emerald-500 " />
              <h3 className="text-2xl font-medium font-sans text-emerald-800 my-3">
                Your Response is Submited Successfully !
              </h3>
              <Link to={`/results/viewresults/${id}`}>
              <button
                className="bg-gradient-to-r from-green-300 via-emerald-500 to-emerald-600 hover:from-emerald-600
                hover:via-emerald-400 hover:to-green-300 
                font-semibold  border px-8 py-2  text-white rounded-full mt-8"
                type="submit"
                onClick={() => handleResetAndClose()}
              >
                View Result
              </button>
              </Link>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
    </Fragment>
  );
};

export default ViewQuestions;
