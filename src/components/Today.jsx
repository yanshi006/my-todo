import React from "react";
import styled from "styled-components";

const Today = () => {

  // const dayArray = ['日','月','火','水','木','金','土'];
  const dayArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();

  return (
    <Day>{year} / {month} / {date} / {dayArray[day]}</Day>
  )
}

export default Today;

const Day = styled.h1`
  font-size: 30px;
  color: #333;
  font-family: serif;
`