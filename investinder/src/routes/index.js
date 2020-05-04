import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';
import SignUpConsultor from '../pages/SignUpConsultor';
import Dashboard from '../pages/Dashboard';
import Matches from '../pages/Matches';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={SignIn} />

        <Route path="/signupi" exact component={SignUp} />
        <Route path="/signupc" exact component={SignUpConsultor} />

        <Route path="/dashboard" exact component={Dashboard} isPrivate />
        <Route path="/matches" exact component={Matches} isPrivate />
      </Switch>
    </>
  );
};

export default Routes;
