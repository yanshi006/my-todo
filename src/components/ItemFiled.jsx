import React from "react";
import styled from "styled-components";

const ItemFiled = ({ label, type, firstValue, secondValue, thirdValue, firstOnClick,secondOnClick, onChange }) => {
  return (
    <List>
      <span>{label}</span>
      <SpaceInput type={type} value={firstValue} onClick={firstOnClick} />
      <SpaceInput type={type} value={secondValue} onClick={secondOnClick} />
      <textarea value={thirdValue} cols="20" rows="4" placeholder='メモ' onChange={onChange} />
    </List>
  )
}

export default ItemFiled;

const List = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SpaceInput = styled.input`
display: block;
margin: 0px 2px;
`
