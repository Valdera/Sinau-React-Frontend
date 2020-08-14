import React from 'react';
import Header from '../../components/header/header.component';
import NavBar from '../../components/navbar/navbar.component';
import Features from '../../components/features/features.component';
import Story from '../../components/story/story.component';

import './homepage.styles.scss';

function HomePage() {
  return (
    <div>
      <NavBar />
      <Header />
      <Features />
      <Story />
    </div>
  );
}

export default HomePage;
