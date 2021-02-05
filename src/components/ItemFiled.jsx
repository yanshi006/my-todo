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

const ItemFiled = ({ label, color, type, text, value, firstOnClick, secondOnClick, onChange }) => {

  const classes = useStyles();

  const buttonTextStyle = {
    textTransform: 'none',
    fontSize: '16px'
  }

  return (
    <List>
      <span>{label}</span>
      <IconButton className={classes.delButton} type={type} aria-label="delete" onClick={firstOnClick}>
        <DeleteIcon />
      </IconButton>
      <Button className={color} style={buttonTextStyle} type={type} size='small' onClick={secondOnClick} variant="contained">
        {text}
      </Button>
      <Textarea value={value} cols="20" rows="4" placeholder='メモ' onChange={onChange} />
    </List>
  )
}

export default ItemFiled;

const List = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Textarea = styled.textarea`
  margin-left: 10px;
`