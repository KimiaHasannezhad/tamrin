import React from 'react';
import Login from './views/Login'
import Signup from './views/Signup'
import {AuthenticationForm} from './containers/AuthenticationForm'

function App() {
  return (
    <div>
    {/* <Login/>
    <Signup/> */}
    <AuthenticationForm/>
    </div>
  )
}

export default App;