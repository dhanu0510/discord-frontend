import React from "react";
import InputsWithLabel from "../../shared/components/InputsWithLabel";

const RegisterPageInputs = (props) => {
  const { mail, setMail, username, setUsername, password, setPassword } = props;

  return (
    <>
      <InputsWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail address"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputsWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter a username"
      />
      <InputsWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default RegisterPageInputs;
