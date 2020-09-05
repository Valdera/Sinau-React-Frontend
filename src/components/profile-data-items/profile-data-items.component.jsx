import React, { Component } from 'react';
import { ReactComponent as WriteIcon } from '../../assets/icon-write.svg';
import { ReactComponent as CorrectIcon } from '../../assets/icon-correct.svg';
import ProfileDataSelect from '../profile-data-select/profile-data-select.component';

class ProfileDataItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: false,
      value: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { value } = this.props;
    this.setState({
      value
    });
  }

  handleChange(evt, value) {
    this.setState({
      value
    });
  }

  async handleSubmit() {
    const { value } = this.state;
    const { data } = this.props;
    updateData = {
      [data]: value
    };
    this.setState({
      change: !this.state.change
    });
  }

  handleClick() {
    this.setState({
      change: !this.state.change
    });
  }
  render() {
    const { change, value } = this.state;
    const { type, data, label, ...otherProps } = this.props;
    const input =
      type === 'text' ? (
        <input type="text" placeholder={value} className="profiledata__input" />
      ) : (
        <ProfileDataSelect
          handleChange={this.handleChange}
          currentValue={value}
          {...otherProps}
        />
      );
    return (
      <div className="profiledata__item">
        <p>{label} :</p>
        {change ? input : <span>{value}</span>}
        <div className="profiledata__change">
          {change ? (
            <CorrectIcon
              className="profiledata__change-svg"
              onClick={this.handleSubmit}
            />
          ) : (
            <WriteIcon
              className="profiledata__change-svg"
              onClick={this.handleClick}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ProfileDataItem;
