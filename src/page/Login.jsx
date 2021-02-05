import React, { useState } from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loginButton: {
    backgroundColor: '#03fc35',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#03fc5a'
    }
  }
})

const Login = () => {

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <LoginAppTitle>Let's get started</LoginAppTitle>
      {/* ////////////ここの部分コンポーネントにまとめるloginとsignup */}
      <LoginContainer>
        <LoginTitle>Login</LoginTitle>
        <TextField value={email} type='email' name='email' placeholder='please your e-mail' label="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <TextField value={password} type='password' name='password' placeholder='please your password' label="Password" onChange={(e) => setPassword(e.target.value)} />
        <Button type='submit' variant="contained" className={classes.loginButton}>Login</Button>
      </LoginContainer>
      {/* //////////// */}
    </form>
  )
}

export default Login;

const LoginAppTitle = styled.h1`
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
  height: 300px;
  background-color: #ddd;
  width: 60%;
  margin: 5% auto 0px;
  padding-bottom: 30px;
`