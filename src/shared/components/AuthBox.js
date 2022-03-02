import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "url('/images/login_bg.svg')",
});

const AuthBox = (props) => {
  const height = props.height || "400px";
  console.log(height);
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: "480px",
          height: height,
          bgcolor: "#36393f",
          borderRadius: "5px",
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
          userSelect: "none",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
