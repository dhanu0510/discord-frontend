import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// components
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";

// valitation
import { validateLoginForm } from "../../shared/utils/validators";

import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";

const LoginPage = ({ login }) => {
  const history = useHistory();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    const userDetails = {
      mail,
      password,
    };
    login(userDetails, history);
  };
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        email={mail}
        setEmail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(LoginPage);
