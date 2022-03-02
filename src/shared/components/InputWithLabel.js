import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

const Label = styled("div")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: "14px",
  marginBottom: "10px",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid #222222",
  borderRadius: "3px",
  fontFamily: "Helvetica Neue",
  color: "#dcddde",
  background: "#303239",
  margin: 0,
  fontSize: "16px",
  padding: "0 10px",
  letterSpacing: "0.5px",
  "&:focus": {
    outline: "none",
    borderColor: "#0da6e8",
  },
});

const InputWithLabel = (props) => {
  const { value, setValue, label, type } = props;

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input value={value} onChange={handleValueChange} type={type} />
    </Wrapper>
  );
};

export default InputWithLabel;
