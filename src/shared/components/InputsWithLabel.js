import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
});

const Label = styled("p")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "12px",
  fontFamily: "sans-serif",
});

const Input = styled("input")({
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  background: "rgb(49,51,57)",
  margin: "10px 0",
  fontSize: "16px",
  padding: "0 5px",
  flexGrow: 1,
});

const InputsWithLabel = (props) => {
  const { value, setValue, label, type } = props;
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input value={value} onChange={handleValueChange} type={type} />
    </Wrapper>
  );
};

export default InputsWithLabel;
