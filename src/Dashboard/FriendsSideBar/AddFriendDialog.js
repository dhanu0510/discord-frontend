import { Dialog, DialogTitle } from "@mui/material";
import React, { useEffect } from "react";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { Typography } from "@mui/material";

import { validateMail } from "../../shared/utils/validators";

import { connect } from "react-redux";
import { getActions } from "../../store/actions/friendsActions.js";

// components
import InputsWithLabel from "../../shared/components/InputsWithLabel";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setMail] = React.useState("");
  const [isFormValid, setIsFormValid] = React.useState("");

  const handleSendInvitation = () => {
    // send friend req to server
    sendFriendInvitation(
      {
        targetMailAddress: mail,
      },
      closeDialogHandler
    );
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Invite your friends to join the your Discord community.
            </Typography>
          </DialogContentText>

          <InputsWithLabel
            label="mail"
            type="text"
            value={mail}
            setValue={setMail}
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Invite"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(AddFriendDialog);
