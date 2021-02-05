import React, { useState } from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AppMessage } from "../components/index";
import { RegisterTitle } from "../components/index";
import firebase from "../config/Firebase";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  loginButton: {
    backgroundColor: '#03fc35',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#03fc5a'
    }
  }
})

const Login = ({ history }) => {

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        history.push('/app');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          alert('パスワードが間違っています。');
        } else if (error.code === 'auth/too-many-requests') {
          alert('このアカウントへのアクセスは一時的に無効にされています。パスワードを設定するか、後でもう一度試してください。');
        } else if (error.code === 'auth/user-not-found') {
          alert('メールアドレスが間違っています。');
        }
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <AppMessage message="Let's get started" />
      <LoginContainer>
        <RegisterTitle title='Login' />
        <TextField value={email} type='email' name='email' placeholder='please your e-mail' label="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <TextField value={password} type='password' name='password' placeholder='please your password' label="Password" onChange={(e) => setPassword(e.target.value)} />
        <Button type='submit' variant="contained" className={classes.loginButton}>Login</Button>
      </LoginContainer>
    </form>
  )
}

export default withRouter(Login);

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