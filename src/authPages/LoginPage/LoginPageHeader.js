import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          color: "white",
          textAlign: "center",
        }}
      >
        Welcome Back!
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#b9bbbe",
          textAlign: "center",
        }}
      >
        We're so excited to see you again!
      </Typography>
    </>
  );
};

export default LoginPageHeader;
