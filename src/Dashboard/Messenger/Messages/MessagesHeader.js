import React from "react";
import { styled } from "@mui/system";
import Avatar from "../../../shared/components/Avatar";
import { Typography } from "@mui/material";

const MainContainer = styled("div")({
  width: "98%",
  // display: "columns ",
  marginTop: "10px",
  display: "column",
  // flexDirection: "column",
  // alignItems: "center",
});

const MessagesHeader = ({ name = " " }) => {
  return (
    <MainContainer>
      <Avatar large username={name} />
      <Typography
        variant="h4"
        color="white"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#B9bbbe",
          marginLeft: "10px",
        }}
      >
        This is the beggining of the conversation with {name}
      </Typography>
    </MainContainer>
  );
};

export default MessagesHeader;
