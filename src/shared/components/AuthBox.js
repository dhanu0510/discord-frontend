import React from "react";

// material UI
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "url('/images/login_bg.svg')",
});

const AuthBox = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: "480px",
          height: 400,
          bgcolor: "#36393F",
          borderRadius: "5px",
          boxShadow: "0px 2px 10px 0 rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
