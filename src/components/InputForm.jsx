import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../config/Firebase";
import "firebase/firestore";

const useStyles = makeStyles((theme) => ({
  amButton: {
    color: theme.status.am,
  },
  pmButton: {
    color: theme.status.pm
  },
  evButton: {
    color: theme.status.ev
  }
}));

const InputForm = ({ addAmTodos, addPmTodos, addEvTodos }) => {

  const classes = useStyles();

  const [input, setInput] = useState('');

  // const db = firebase.firestore();
  // useEffect(() => {
  //   db.collection('TodoList').doc('am').set(input)
  // }, [db, input])
  // useEffect(() => {
  //   db.collection('TodoList').doc('pm').set(input)
  // }, [db, input])
  // useEffect(() => {
  //   db.collection('TodoList').doc('ev').set(input)
  // }, [db, input])

  const handleAmClick = () => {
    if (input.trim() === '') {
      alert('午前の目標を入力しよう！')
    } else {
      addAmTodos(input)
    };
    setInput('');
  }
  const handlePmClick = () => {
    if (input.trim() === '') {
      alert('午前の目標を入力しよう！')
    } else {
      addPmTodos(input)
    };
    setInput('');
  }
  const handleEvClick = () => {
    if (input.trim() === '') {
      alert('午前の目標を入力しよう！')
    } else {
      addEvTodos(input)
    };
    setInput('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //firebaseで値を管理する
    if (input.trim() === '') {
      alert('今日の目標を決めよう！')
    }
    setInput('');
  }

  const buttonTextStyle = {
    textTransform: 'none',
    fontSize: '16px'
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField id='addFiled' value={input} color='primary' label="Add" onChange={(e) => setInput(e.target.value)} />
      <ButtonContainer>
        <Button variant="outlined" style={buttonTextStyle} className={classes.amButton} onClick={() => handleAmClick()}>a.m.</Button>
        <Button variant="outlined" style={buttonTextStyle} className={classes.pmButton} onClick={() => handlePmClick()}>p.m.</Button>
        <Button variant="outlined" style={buttonTextStyle} className={classes.evButton} onClick={() => handleEvClick()}>night</Button>
      </ButtonContainer>
    </Form>
  )
}

export default InputForm;

const Form = styled.div`
  display: flex;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
  margin-left: 10px
`