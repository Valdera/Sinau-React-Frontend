import React from 'react';

import './with-spinner.styles.scss';

const SpinnerContainer = () => {
  return (
    <div className="c">
      <div className="rec spinner6"></div>
      <div className="rec spinner5"></div>
    </div>
  );
};

const WithSpinner = (WrapperComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerContainer />
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
