import React, { useState, useEffect } from 'react'
import { loginAction } from '../action/userAction'
import { useDispatch } from 'react-redux'

 interface MyProps {
     displayLogin: any,
 }

const Login = ( props: MyProps ) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginActive, setIsLoginActive] = useState(false)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (!!email && !!password && isLoginActive) {
  //     dispatch(loginAction(email, password))
  //   }
  // }, [email, password, isLoginActive])

  const handleLogin = () => {
    dispatch(loginAction(email, password))
  }

  return (
    <div className="d-flex flex-di-row justify-c-center">
      <div className="form-body">
        <h3>ورود</h3>
        <div className="form-item">
          <input
            type="text"
            placeholder="&#xf0e0; email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form-item">
          <input
            type="password"
            placeholder="&#xf13e; password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <a href="#">فراموشی رمز عبور</a>
        </div>
        <div className="auth-btn-section">
          <button
            className="auth-primary-btn"
            onClick={() => handleLogin()}
          >
            ورود
          </button>
          <p>عضو نیستید ؟</p>
          <button className="auth-outline-btn" onClick={() => props.displayLogin()}>ثبت نام</button>
        </div>
      </div>
    </div>
  )
}

export default Login
