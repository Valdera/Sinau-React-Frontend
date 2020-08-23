import React from 'react';

import './with-spinner.styles.scss';

const SpinnerContainer = () => {
  return (
    <div class="c">
      <div class="rec spinner6"></div>
      <div class="rec spinner5"></div>
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
