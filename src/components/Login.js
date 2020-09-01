import React from 'react'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase/firebase'
import '../styles/Login.css'
import { useStateValue } from '../context/StateProvider'
import { actionTypes } from '../reducers/reducer'

function Login() {
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  return (
    <div className="login">
      <div className="login__logo">
        <img src="fb-logo.png" alt="" />
        <img src="fb-text.png" className="fb__text" alt="" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login
