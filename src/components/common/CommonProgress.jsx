import { Box } from "@mui/material";
import React from "react";
import { loader } from "../../assets/image";

export const CommonProgress = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height:"100%"
      }}
    >
      {/* <CircularProgress size={70} color="secondary"/>  */}
      <Box
        sx={{
          opacity: 0.9,
          marginTop:"25px",
          borderRadius: "20px",
          boxShadow: 2,
          alignItems: "center",
          background: "white",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <img
          src={loader}
          alt="loader"
          className="lg:w-[450px] xs:w-[250px] lg:h-[350px] xs:h-[150px]"
        />
      </Box>
    </Box>
  );
};
