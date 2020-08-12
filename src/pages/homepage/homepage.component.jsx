import React from 'react';
import Header from '../../components/header/header.component';
import NavBar from '../../components/navbar/navbar.component';
import Features from '../../components/features/features.component';

import './homepage.styles.scss';

function HomePage() {
  return (
    <div>
      <NavBar />
      <Header />
      <Features />
    </div>
  );
}

export default HomePage;
