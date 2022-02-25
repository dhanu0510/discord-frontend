import React from "react";
import Button from "@material-ui/core/Button";
import GroupsIcon from "@mui/icons-material/Groups";

const MainPageButton = () => {
  return (
    <Button
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        backgroundColor: "#5865F2",
      }}
    >
      <GroupsIcon />
    </Button>
  );
};

export default MainPageButton;
