import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface MyProps {
  displayLogin: any;
  loginUsername?: any;
  loginPassword?: any;
  setLoginUsername(username: any): any;
  setLoginUserPassword(password: any): any;
   allowLogin: boolean;
   setCompare(compare: boolean): any;
}

const Login = (props: MyProps) => {
  const [loginUsername, setloginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [isLoginActive, setIsLoginActive] = useState(false)
  // const [allowLogin, setAllowLogin] = useState(false)

  const handleLogin = () => {
   props.setCompare(true);
  } 

  return (
    <div className="d-flex flex-di-row justify-c-center">
      <div className="form-body">
        <h3>ورود</h3>
        <div className="form-item">
          <input
            type="text"
            placeholder="&#xf0e0; username"
            onChange={(e) => props.setLoginUsername(e.target.value)}
          ></input>
        </div>
        <div className="form-item">
          <input
            type="password"
            placeholder="&#xf13e; password"
            onChange={(e) => props.setLoginUserPassword(e.target.value)}
          ></input>
          <a href="#">فراموشی رمز عبور</a>
        </div>
        <div className="auth-btn-section">
          <button
            // className={
            //  props.allowLogin ? 'auth-primary-btn' : 'auth-primary-btn-disabled'
            // }
            className='auth-primary-btn'
            onClick={() => handleLogin()}
          >
            ورود
          </button>
          <p>عضو نیستید ؟</p>
          <button
            className="auth-outline-btn"
            onClick={() => props.displayLogin()}
          >
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
