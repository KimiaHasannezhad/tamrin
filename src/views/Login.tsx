import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

interface MyProps {
  displayLogin: any
  name?: any
  password?: any
  loginUsername?: any
  loginPassword?: any
  allowLogin: boolean
  setLoginUsername(username: any): any
  setLoginUserPassword(password: any): any
  setCompare(compare: boolean): any
}

const Login = (props: MyProps) => {
  const [loginUsername, setloginUsername] = useState<any>('')
  const [loginPassword, setLoginPassword] = useState<any>('')
  const [isLoginActive, setIsLoginActive] = useState(false)
  const [userInfo, setUserInfo] = useState<any>(
    localStorage.getItem('userInfo'),
  )

  const handleLogin = () => {
    if (!!userInfo) {
      if (!!loginUsername && !!loginPassword) {
        if (
          loginUsername === JSON.parse(userInfo)[0].username &&
          loginPassword === JSON.parse(userInfo)[1].password
        ) {
          localStorage.setItem('allowLogin', true.toString())
          localStorage.setItem('showHeader', true.toString())
          history.push('./home')
          window.location.reload()
        } else {
          window.alert('نام کاربری یا کلمه عبور اشتباه است')
        }
      } else {
        window.alert('تمامی فیلد ها  رو پر کنید')
      }
    } else {
      window.alert('شما هنوز ثبت نام نکرده اید')
    }
  }

  return (
    <div className="d-flex flex-di-row justify-c-center">
      <div className="form-body">
        <h3>ورود</h3>
        <div className="form-item">
          <input
            type="text"
            placeholder="&#xf0e0; username"
            onChange={(e) => {
              props.setLoginUsername(e.target.value)
              setloginUsername(e.target.value)
            }}
          ></input>
        </div>
        <div className="form-item">
          <input
            type="password"
            placeholder="&#xf13e; password"
            onChange={(e) => {
              props.setLoginUserPassword(e.target.value)
              setLoginPassword(e.target.value)
            }}
          ></input>
          <a href="#">فراموشی رمز عبور</a>
        </div>
        <div className="auth-btn-section">
          <button className="auth-primary-btn" onClick={() => handleLogin()}>
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
