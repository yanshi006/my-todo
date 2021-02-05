import React, { useState } from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  signUpButton: {
    backgroundColor: '#FC8A25',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#FF9B43'
    }
  }
})

const SignUp = () => {

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <SignAppTitle>Welcome TodoListApp</SignAppTitle>
      {/* ///////////////////////// */}
      <LoginContainer>
        <LoginTitle>SignUp</LoginTitle>
        <TextField type='email' value={email} name='email' placeholder='please your e-mail' label="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <TextField type='password' value={password} name='password' placeholder='please make a password' label="Password" onChange={(e) => setPassword(e.target.value)} />
        <TextField type='text' value={name} name='name' placeholder='please your name' label="Name" onChange={(e) => setName(e.target.value)} />
        <Button type='submit' variant="contained" className={classes.signUpButton}>Login</Button>
      </LoginContainer>
      {/* /////////////////////////////// */}
    </form>
  )
}

export default SignUp;

const SignAppTitle = styled.h1`
  font-size: 30px;
  font-family: serif;
  color: #aaa;
  text-align: center;
`

const LoginTitle = styled.h1`
  font-size: 30px;
  color: #333;
  font-family: serif;
`
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 350px;
  background-color: #ddd;
  width: 60%;
  margin: 5% auto 0px;
  padding-bottom: 30px;
`