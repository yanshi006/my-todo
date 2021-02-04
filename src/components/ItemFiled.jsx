import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: '#03fc1c',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#03fc5a'
    }
  },
  delButton: {
    color: '#fc031c',
    transition: '.3s',
    '&:hover': {
      color: '#fc0362'
    }
  }
})

const ItemFiled = ({ label, type, secondValue, thirdValue, firstOnClick, secondOnClick, onChange }) => {

  const classes = useStyles();

  return (
    <List>
      <span>{label}</span>
      <IconButton className={classes.delButton} type={type} aria-label="delete" onClick={firstOnClick}>
        <DeleteIcon />
      </IconButton>
      {/* <SpaceInput type={type} value={firstValue} onClick={firstOnClick} /> */}
      {/* <SpaceInput type={type} value={secondValue} onClick={secondOnClick} /> */}
      <Button type={type} size='small' onClick={secondOnClick} variant="contained" className={classes.button}>
        {secondValue}
      </Button>
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