import React from 'react';
import Navbar from '../../components/navbar/navbar.component';

import './errorpage.styles.scss';

function ErrorPage({ children }) {
  return (
    <div>
      <Navbar />
      <div className="error--background">
        <div className="error">
          <h1 className="error__title">ERROR</h1>
          <div className="error__contact">
            <p className="error__text">Error Message : {children}</p>
            Please Contact <span>sinau.education.mail.gmail.com</span> if you
            can't solve this
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
