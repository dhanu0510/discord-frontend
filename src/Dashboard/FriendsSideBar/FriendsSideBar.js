import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle";
import FriendsList from "./FriendsList/FriendsList";
import PendingInvitationsList from "./PendingInvitationsList/PendingInvitationsList";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  width: "224px",
  minWidth: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const UsernameLabel = styled("div")({
  height: "10px",
  width: "100%",
  textAlign: "center",
  margin: "10px auto",
  color: "#fff",
});

const FriendsSideBar = ({ userDetails }) => {
  // const userName = userDetails.username;
  return (
    <MainContainer>
      <UsernameLabel>@{userDetails?.username}</UsernameLabel>
      <AddFriendButton />
      <FriendsTitle title="Private Messages" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationsList />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ auth }) => {
  return {
    ...auth,
  };
};

export default connect(mapStoreStateToProps)(FriendsSideBar);
