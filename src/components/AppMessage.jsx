import React from "react";
import styled from "styled-components";

const AppMessage = ({ message }) => {
  return (
    <RegisterMessage>{message}</RegisterMessage>
  )
}

export default AppMessage;

const RegisterMessage = styled.h1`
  font-size: 30px;
  font-family: serif;
  color: #aaa;
  text-align: center;
`