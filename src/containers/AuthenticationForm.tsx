import React, { useState, useEffect } from 'react'
import Login from '../views/Login'
import Signup from '../views/Signup'
import { SignupContext } from '../context/SignupContext'
import { LoginContext } from '../context/LoginContext'

export const AuthenticationForm = () => {
  const [showLogin, setShowLogin] = useState(true)
  const [allowLogin, setAllowLogin] = useState(false)
  const [compare, setCompare] = useState(false)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [loginName, setLoginName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const setUsername = (data: any) => {
    setName(data)
  }

  const setUserPassword = (data: any) => {
    setPassword(data)
  }

  const setLoginUsername = (data: any) => {
    setLoginName(data)
  }

  const setLoginUserPassword = (data: any) => {
    setLoginPassword(data)
  }

  const loginAllownece = (data: any) => {
    setAllowLogin(data)
  }

  useEffect(() => {
    localStorage.setItem('allowLogin', false.toString())
    localStorage.setItem('showHeader', false.toString())

  })

  return (
    <>
      {showLogin ? (
        <SignupContext.Provider value={{ username: name, password: password }}>
          <Signup
            displaySignUp={() => setShowLogin(false)}
            setUsername={setUsername}
            setUserPassword={setUserPassword}
          />
        </SignupContext.Provider>
      ) : (
        <LoginContext.Provider
          value={{ loginUsername: loginName, loginPassword: loginPassword }}
        >
          <Login
            displayLogin={() => setShowLogin(true)}
            setLoginUsername={setLoginUsername}
            setLoginUserPassword={setLoginUserPassword}
            allowLogin={allowLogin}
            setCompare={setCompare}
            name={name}
            password={password}
          />
        </LoginContext.Provider>
      )}
    </>
  )
}
