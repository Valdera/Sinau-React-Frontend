import React from 'react';
import Navbar from '../../components/navbar/navbar.component';
import './loginpage.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

function LoginPage() {
  return (
    <div>
      <Navbar className="loginpage-navbar" />
      <div className="loginpage">
        <div className="login">
          <SignIn />
        </div>
        <div className="signup">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
