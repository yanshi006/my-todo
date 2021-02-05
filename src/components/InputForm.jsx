import React, { useState,useContext } from "react";
import { AppContext } from "../AppContext";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from "styled-components";

const InputForm = ({ addAmTodos, addPmTodos, addEvTodos }) => {

  const { useStyles } = useContext(AppContext);
  const classes = useStyles();

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //firebaseで値を管理する
    if (input.trim() === '') {
       alert('今日の目標を決めよう！')
    } else {
      // addAmTodos(input)
      // addPmTodos(input)
      // addEvTodos(input)
    }//am,pm,evで処理を分けたい

    setInput('');
    // console.log(e.target.value);
  }

  const buttonTextStyle = {
    textTransform: 'none',
    fontSize: '16px'
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      {/* setInputで入力された値を取り出せていない */}
      <TextField id='addFiled' value={input} color='primary' label="Add" onChange={(e) => setInput(e.target.value)} />
      <ButtonContainer>
        <Button variant="outlined" style={buttonTextStyle} className={classes.amButton} onClick={() => addAmTodos(input)}>a.m.</Button>
        <Button variant="outlined" style={buttonTextStyle} className={classes.pmButton} onClick={() => addPmTodos(input)}>p.m.</Button>
        <Button variant="outlined" style={buttonTextStyle} className={classes.evButton} onClick={() => addEvTodos(input)}>night</Button>
      </ButtonContainer>
    </Form>
  )
}

export default InputForm;

const Form = styled.form`
  display: flex;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
  margin-left: 10px
`