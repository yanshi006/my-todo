import React from "react";
import styled from "styled-components";

const ListTitle = ({ label }) => {
  return (
    <TitleStyle>{label}</TitleStyle>
  )
}

export default ListTitle;

const TitleStyle = styled.h1`
  font-size: 30px;
  color: #333;
  font-family: serif;
`