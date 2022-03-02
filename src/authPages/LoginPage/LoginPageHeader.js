import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <div style={{marginBottom: "15px"}}>
      <Typography
        variant="h5"
        sx={{ color: "white", textAlign: "center", fontWeight: "bold" }}
      >
        Welcome Back!
      </Typography>
      <Typography
        sx={{ color: "#b9bbbe", textAlign: "center", fontWeight: "500" }}
      >
        We're happy that you are with us!
      </Typography>
    </div>
  );
};

export default LoginPageHeader;
