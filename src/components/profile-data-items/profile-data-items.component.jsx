import React, { Component } from 'react';
import { ReactComponent as WriteIcon } from '../../assets/icon-write.svg';
import { ReactComponent as CorrectIcon } from '../../assets/icon-correct.svg';
import ProfileDataSelect from '../profile-data-select/profile-data-select.component';
import { connect } from 'react-redux';
import { updateMeStart } from '../../redux/auth/auth.actions';

const allowedUppercase = ['majors'];

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
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const { value } = this.props;
    this.setState({
      value
    });
  }

  handleInputChange(evt) {
    this.setState({
      value: evt.target.value
    });
  }

  handleChange(evt, value) {
    this.setState({
      value
    });
  }

  async handleSubmit() {
    const { value } = this.state;
    const { data, updateMeStart } = this.props;
    const updateData = {
      [data]: value
    };
    await updateMeStart(updateData);
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
        <input
          type="text"
          placeholder={value}
          className="profiledata__input"
          onChange={this.handleInputChange}
        />
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
        {change ? (
          input
        ) : (
          <span>
            {typeof value === 'string' && allowedUppercase.includes(data)
              ? value.toUpperCase()
              : value}
          </span>
        )}
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

const mapDispatchToProps = (dispatch) => ({
  updateMeStart: (updateData) => dispatch(updateMeStart(updateData))
});

export default connect(null, mapDispatchToProps)(ProfileDataItem);
