import React from 'react';

import './with-dot.styles.scss';

const DotContainer = () => {
  return (
    <div className="c">
      <div className="wrap1">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
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
