import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './Components/login';
import Main from './Components/main';
import File from './filepond'

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro" exact component={Main} />
         </Switch>
      </BrowserRouter>  
    );
}