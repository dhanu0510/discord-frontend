export const chatType = {
  DIRECT: "DIRECT",
  GROUP: "GROUP",
};

export const chatActions = {
  SET_CHOOSEN_CHAT_DETAILS: "SET_CHOOSEN_CHAT_DETAILS",
  SET_MESSAGES: "SET_MESSAGES",
  SET_CHAT_TYPE: "SET_CHAT_TYPE",
};

export const getActions = (disapatch) => {
  return {
    setChoosenChatDetails: (details, chatType) => {
      disapatch(setChoosenChatDetails(details, chatType));
    },
  };
};

export const setChoosenChatDetails = (chatDetails, type) => {
  return {
    type: chatActions.SET_CHOOSEN_CHAT_DETAILS,
    chatType: type,
    chatDetails,
  };
};

export const setMessages = (messages) => {
  return {
    type: chatActions.SET_MESSAGES,
    messages,
  };
};
