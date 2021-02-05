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
  signUpButton: {
    backgroundColor: '#FC8A25',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#FF9B43'
    }
  }
})

const SignUp = ({ history }) => {

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        history.push('/login')
      }).catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('このメールアドレスは他のアカウントで使用されています。')
        } else if (error.code === 'auth/weak-password') {
          alert('パスワードは6文字以上です。')
        }
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <AppMessage message="Welcome TodoListApp" />
      <LoginContainer>
        <RegisterTitle title='SignUp' />
        <TextField type='email' value={email} name='email' placeholder='please your e-mail' label="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <TextField type='password' value={password} name='password' placeholder='please make a password' label="Password" onChange={(e) => setPassword(e.target.value)} />
        <TextField type='text' value={name} name='name' placeholder='please your name' label="Name" onChange={(e) => setName(e.target.value)} />
        {/* <input type="email" value={email} name='email' placeholder='please your e-mail' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} name='password' placeholder='please your e-mail' onChange={(e) => setPassword(e.target.value)} />
        <input type="text" value={name} name='name' placeholder='please your e-mail' onChange={(e) => setName(e.target.value)} /> */}
        <Button type='submit' variant="contained" className={classes.signUpButton}>Login</Button>
      </LoginContainer>
    </form>
  )
}

export default withRouter(SignUp);

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