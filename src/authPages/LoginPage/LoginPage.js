import React, { useState, useEffect } from "react";

// components
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";

// valitation
import { validateLoginForm } from "../../shared/utils/validators";

const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    console.log("login");
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

export default LoginPage;
