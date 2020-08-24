import React from 'react';

import './with-dot.styles.scss';

const DotContainer = () => {
  return (
    <div class="c">
      <div class="wrap1">
        <div class="dot dot1"></div>
        <div class="dot dot2"></div>
        <div class="dot dot3"></div>
      </div>
    </div>
  );
};

const WithDot = (WrapperComponent) => {
  const Dot = ({ isLoading, ...otherProps }) => {
    return isLoading ? <DotContainer /> : <WrapperComponent {...otherProps} />;
  };
  return Dot;
};

export default WithDot;
