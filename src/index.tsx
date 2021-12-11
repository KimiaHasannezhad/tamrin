import React from 'react'
import ReactDOM from 'react-dom'
import './styles/globalStyle.css'
import './styles/auth.css'
import './styles/hashtags.css'
import './styles/communication.css'
import './styles/profile.css'
import './styles/create-new-post.css'
import './styles/header.css'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Header from './components/Header'
import { AuthenticationForm } from './containers/AuthenticationForm'
import { createBrowserHistory } from 'history'
import { LoginContext } from './context/LoginContext'

ReactDOM.render(
  <BrowserRouter >
    {localStorage.getItem('showHeader') === 'false' ? '' : <Header />}
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/auth" />} />
      <Route exact path="/auth" component={AuthenticationForm} />
      {!!localStorage.getItem('userInfo') &&
      localStorage.getItem('allowLogin') === 'true' ? (
        <Route exact path="/home" component={Home} />
      ) : (
        <Redirect to="/auth" />
      )}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
