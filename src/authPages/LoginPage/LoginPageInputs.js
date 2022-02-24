import React from "react";

// components

import InputsWithLabel from "../../shared/components/InputsWithLabel";

const LoginPageInputs = ({ email, setEmail, password, setPassword }) => {
  return (
    <>
      <InputsWithLabel
        value={email}
        setValue={setEmail}
        label="Email"
        type="text"
        placeholder="Enter your e-mail"
      />
      <InputsWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
    </>
  );
};

export default LoginPageInputs;
