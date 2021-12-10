import React, { createContext, useState } from 'react'

interface SignupStates {
  username: string
  password: string
}

export const SignupContext = React.createContext<SignupStates>({
  username: '',
  password: '',
})

export const SignupProvider = (props: any) => {
  const [username, setUsername] = React.useState<any>('')
  const [password, setPassword] = React.useState<any>('')

  return (
    <SignupContext.Provider value={{ username, password }}>
      {props.children}
    </SignupContext.Provider>
  )
}
