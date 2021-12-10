import React, { createContext, useState } from 'react'

interface LoginStates {
  loginUsername: string
  loginPassword: string
}

export const LoginContext = createContext<LoginStates>({
  loginUsername: '',
  loginPassword: '',
})

export const LoginProvider = (props: any) => {
  const [loginUsername, setLoginUsername] = useState<any>('')
  const [loginPassword, setLoginPassword] = useState<any>('')

  return (
    <LoginContext.Provider value={{ loginUsername, loginPassword }}>
      {props.children}
    </LoginContext.Provider>
  )
}
