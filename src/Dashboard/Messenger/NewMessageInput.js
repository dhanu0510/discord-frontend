import React, { useState } from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { sendDirectMessage } from "../../realtimeCommunication/socketConnection";

const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  width: "98%",
  height: "44px",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "0 10px",
  // outline: "none",
});

const NewMessageInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState("");
  const handleMessageChangeValue = (e) => {
    setMessage(e.target.value);
  };
  const handleKeyPresses = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (message.length > 0) {
        // choosenChatDetails.sendMessage(message);
        handleSendMessage();
        setMessage("");
      }
    }
  };

  const handleSendMessage = () => {
    sendDirectMessage({
      receiverUserId: chosenChatDetails.id,
      content: message,
    });
  };
  return (
    <MainContainer>
      <ArrowForwardIcon sx={{ color: "white" }} />
      <Input
        placeholder={`Message @${chosenChatDetails.name}`}
        value={message}
        onChange={handleMessageChangeValue}
        onKeyDown={handleKeyPresses}
      />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(NewMessageInput);
