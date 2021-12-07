import React, { useState } from 'react'
import Login from '../views/Login'
import Signup from '../views/Signup'

export const AuthenticationForm = () => {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <>
      {showLogin ? (
        <Login displayLogin={() => setShowLogin(false)} />
      ) : (
        <Signup displaySignUp={() => setShowLogin(true)} />
      )}
    </>
  )
}
