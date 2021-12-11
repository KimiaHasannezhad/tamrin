import React, { useContext , useState } from 'react'
import { SignupContext } from '../context/SignupContext'

interface MyProps {
  displaySignUp: any
  // username?: any
  // password?: any;
  setUsername(username: any): any
  setUserPassword(password: any): any
}

const Signup = (props: MyProps) => {
  let { username, password } = useContext(SignupContext)

  const [_username, _setUsername] = useState<any>()
  const [_userPassword, _setUserPassword] = useState<any>()

  const handleSignup = () => {
    if (!!_username && !!_userPassword) {
      localStorage.setItem('userInfo', JSON.stringify([{username: _username} , {password:_userPassword}]))
      props.displaySignUp(false)
    } else {
      window.alert('تمامی فیلد ها را پر کنید')
    }
  }

  return (
    <div className="d-flex flex-di-row justify-c-center">
      <div className="form-body">
        <h3>ثبت نام</h3>
        <div className="form-item">
          <input
            type="text"
            placeholder="&#xf0e0; username"
            onChange={(e) => {
              props.setUsername(e.target.value)
              _setUsername(e.target.value)
            }}
          ></input>
        </div>
        <div className="form-item">
          <input
            type="text"
            placeholder="&#xf13e; password"
            onChange={(e) => {
              props.setUserPassword(e.target.value)
              _setUserPassword(e.target.value)
            }}
          ></input>
          <div className="d-flex flex-dir-row-reverse align-items-center">
            <input type="checkbox" className="w-5 margin-10"></input>
            <label>اکانت شرکتی</label>
          </div>
        </div>
        <div className="auth-btn-section">
          <button className="auth-primary-btn" onClick={() => handleSignup()}>
            ثبت نام
          </button>
          <p>در حال حاضر اکانت دارید ؟</p>
          <button
            className="auth-outline-btn"
            onClick={() => {
              props.displaySignUp()
            }}
          >
            ورود
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup
