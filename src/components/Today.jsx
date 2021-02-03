import React from "react";

const Today = () => {

  const dayArray = ['日','月','火','水','木','金','土'];

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();

  return (
    <h1>{year}/{month}/{date}/{dayArray[day]}</h1>
  )
}

export default Today