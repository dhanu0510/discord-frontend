import io from "socket.io-client";
import {
  setPendingFriendsInvitations,
  setFriends,
  setOnlineUsers,
} from "../store/actions/friendsActions";
import store from "../store/store";
import { updateDirectChatHistoryIfActive } from "../shared/utils/chat";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;
  socket = io.connect("http://localhost:5002", {
    auth: {
      token: jwtToken,
    },
  });
  socket.on("connect", () => {
    // console.log("connected to socket server");
    // console.log(socket.id);
  });

  socket.on("friend-invitations", (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  socket.on("friends-list", (data) => {
    // console.log(data);
    const { friendsList } = data;
    store.dispatch(setFriends(friendsList));
  });
  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });
  socket.on("direct-chat-history", (data) => {
    // console.log(data);
    updateDirectChatHistoryIfActive(data);
  });
};
export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};
