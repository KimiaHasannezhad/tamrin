import React, { useState } from 'react'
import Login from '../views/Login'
import Signup from '../views/Signup'

export const AuthenticationForm = () => {
  const [showLogin, setShowLogin] = useState(true)

  // const _displayLogin = (data: boolean) => {
  //   setShowLogin(data)
  // }

  return (
    <>{showLogin ? <Login/> : <Signup />}</>
  )
}
