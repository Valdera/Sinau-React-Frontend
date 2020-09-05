import React, { Component } from 'react';
import { ReactComponent as ArrowDown } from '../../assets/icon-arrow-bottom.svg';
import './profile-data-select.styles.scss';

class ProfileDataSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClickItem(evt, value) {
    const { handleChange } = this.props;
    this.setState({
      active: !this.state.active
    });
    handleChange(evt, value);
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const { currentValue, values } = this.props;
    const { active } = this.state;
    return (
      <div className="profiledata__select" onClick={this.handleClick}>
        {typeof currentValue === 'string'
          ? currentValue.toUpperCase()
          : currentValue}{' '}
        <ArrowDown
          className={`profiledata__select-arrow ${
            active ? 'profiledata__select-arrow-up' : ''
          }`}
        />
        {active ? (
          <div className="profiledata__select-box">
            {values.map((value) => {
              if (currentValue !== value) {
                return (
                  <div
                    key={`select__${value}`}
                    className="profiledata__select-items"
                    onClick={(e) => this.handleClickItem(e, value)}>
                    {typeof value === 'string' ? value.toUpperCase() : value}
                  </div>
                );
              }
              return '';
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default ProfileDataSelect;
