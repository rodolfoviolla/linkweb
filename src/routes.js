import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Add from './pages/add'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/add' component={Add}/>
    </Switch>
  </BrowserRouter>
)

export default Routes