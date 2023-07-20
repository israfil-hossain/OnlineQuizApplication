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
      <Box
        sx={{
          opacity: 1,
          marginTop:"80px",
          borderRadius: "20px",
          boxShadow: 2,
          alignItems: "center",
          background: "white",
        }}
      >
        <img
          src={loader}
          alt="loader"
          className="lg:w-[450px] xs:w-[350px] lg:h-[350px] xs:h-[250px] justify-center p-4"
        />
      </Box>
    </Box>
  );
};
