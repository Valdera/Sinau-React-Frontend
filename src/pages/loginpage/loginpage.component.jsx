import React from 'react';
import Navbar from '../../components/navbar/navbar.component';
import './loginpage.styles.scss';

function LoginPage() {
  return (
    <div>
      <Navbar className="loginpage-navbar" />
      <div className="loginpage">
        <div className="login"></div>
        <div className="signup"></div>
      </div>
    </div>
  );
}

export default LoginPage;
