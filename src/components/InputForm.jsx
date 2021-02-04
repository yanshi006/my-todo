import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  amButton: {
    color: theme.status.am
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

  const handleSubmit = (e) => {
    e.preventDefault();

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
  
  return (
    <Form onSubmit={handleSubmit}>
      {/* setInputで入力された値を取り出せていない */}
      <TextField id='addFiled' value={input} color='primary' label="Add" onChange={(e) => setInput(e.target.value)} />
      <ButtonContainer>
        <Button variant="outlined" className={classes.amButton} onClick={() => addAmTodos(input)}>morning</Button>
        <Button variant="outlined" className={classes.pmButton} onClick={() => addPmTodos(input)}>afternoon</Button>
        <Button variant="outlined" className={classes.evButton} onClick={() => addEvTodos(input)}>night</Button>
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
  height: 130px;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`