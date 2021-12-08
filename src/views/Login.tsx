import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

interface MyProps {
  displayLogin: any
}

const Login = (props: MyProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginActive, setIsLoginActive] = useState(false)
  // const [isDisabled, setisDisabled] = useState(true)
  const [allowLogin, setAllowLogin] = useState(false)

  const dispatch = useDispatch()

  const handleLogin = () => {
    localStorage.setItem('username', username)
    localStorage.setItem('Password', password)
  }

  useEffect(() => {
    if (!!username && !!password) {
      setAllowLogin(true)
    }
  }, [allowLogin])

  return (
    <div className="d-flex flex-di-row justify-c-center">
      <div className="form-body">
        <h3>ورود</h3>
        <div className="form-item">
          <input
            type="text"
            placeholder="&#xf0e0; username"
            onChange={(e) => setUsername(e.target.value)}
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
            className={
              allowLogin ? 'auth-primary-btn' : 'auth-primary-btn-disabled'
            }
            onClick={() => handleLogin()}
          >
            <Link to="/home">ورود</Link>
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
