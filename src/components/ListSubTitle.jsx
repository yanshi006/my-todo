import React from "react";
import styled from "styled-components";

const ListSubTitle = ({ color, label }) => {
  return (
    <SubTitleStyle className={color}>{label}</SubTitleStyle>
  )
}

export default ListSubTitle;

const SubTitleStyle = styled.h2`
  font-size: 25px;
  font-family: serif;
`