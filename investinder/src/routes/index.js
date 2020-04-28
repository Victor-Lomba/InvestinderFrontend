import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';
import SignUpConsultor from '../pages/SignUpConsultor';

// import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={SignIn} />

        <Route path="/signupI" exact component={SignUp} />
        <Route path="/signupC" exact component={SignUpConsultor} />

      </Switch>
    </>
  );
};

export default Routes;
