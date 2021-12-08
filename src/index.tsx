import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './styles/globalStyle.css'
import './styles/auth.css'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from './containers/Home'
import { AuthenticationForm } from './containers/AuthenticationForm'
import { createBrowserHistory } from 'history'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/auth" />} />
        <Route exact path="/auth" component={AuthenticationForm} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
