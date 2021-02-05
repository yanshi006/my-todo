import React from "react";
import styled from "styled-components";

const RegisterTitle = ({ title }) => {
  return (
    <RegisterMainTitle>{title}</RegisterMainTitle>
  )
}

export default RegisterTitle;

const RegisterMainTitle = styled.h1`
  font-size: 30px;
  color: #333;
  font-family: serif;
`