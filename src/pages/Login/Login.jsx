import React, { useState, useEffect } from 'react'
import './Login.css'
import { loginInitiate } from '../../redux/actions'
import { Link, useHistory } from 'react-router-dom'
import AmazonLogo from './Amazon_Logo.png'
import { useSelector, useDispatch } from 'react-redux'
export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { user } = useSelector((state) => state.data)
  let dispatch = useDispatch()
  let history = useHistory()

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [user, history])
  const signIn = e => {
    e.preventDefault()
    dispatch(loginInitiate(email, password))
    setEmail('')
    setPassword('');
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img src={AmazonLogo} alt="logo" className='login-logo' />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' onClick={signIn} className='login-signIn'>Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of use and Privacy Notice.</p>
      </div>
      <p>New to Amazon ?</p>
      <Link to='/register'>
        <button className="login-register">Create Your Amazon Account</button>
      </Link>
    </div>
  )
}
