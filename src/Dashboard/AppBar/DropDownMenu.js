import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getActions } from "../../store/actions/roomActions";
import { connect } from "react-redux";
//
import { logout } from "../../shared/utils/auth";

const BasicMenu = ({ audioOnly, setAudioOnly }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleAudioOnlyChange = () => {
    setAudioOnly(!audioOnly);
  };
  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{ color: "white" }}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Button>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Button>
        <Button>
          <MenuItem onClick={handleAudioOnlyChange}>
            {audioOnly ? "Audio Only Enabled" : "Audio Only Disabled"}
          </MenuItem>
        </Button>
      </Menu>
    </div>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(BasicMenu);
