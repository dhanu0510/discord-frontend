import React from "react";
import { styled } from "@mui/system";
import Avatar from "../../../shared/components/Avatar";
import { Typography } from "@mui/material";

const MainContainer = styled("div")({
  width: "97%",
  display: "flex",
  marginTop: "10px",
  fontFamily: "sans-serif",
});

const AvatarContainer = styled("div")({
  width: "70px",
});

const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const MessageContent = styled("div")({
  color: "#dcddde",
});

const SameAuthorMessageContent = styled("div")({
  color: "#dcddde",
  width: "97%",
});
const SameAuthorMessageText = styled("div")({
  marginLeft: "70px",
  fontFamily: "sans-serif",
});

const Message = ({ content, sameAuthor, userName, date, sameDay }) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }
  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={userName} />
      </AvatarContainer>
      <MessageContainer>
        <Typography
          variant="h4"
          color="white"
          sx={{
            fontWeight: "bold",
            fontSize: "14px",
            color: "white",
          }}
        >
          {userName}{" "}
          <span style={{ fontSize: "12px", color: "#72767d" }}> {date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
};

export default Message;
