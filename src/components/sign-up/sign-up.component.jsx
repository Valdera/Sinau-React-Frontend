import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import ButtonSlide from '../button-slide/button-slide.component';
import FormRadio from '../form-radio/form-radio.component';
import { connect } from 'react-redux';
import { emailSignUpStart } from '../../redux/auth/auth.actions';
import { ReactComponent as SecureSVG } from '../../assets/undraw_secure.svg';

import './sign-up.styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      kelas: '',
      name: '',
      major: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
  }

  async handleSubmitSignUp(evt) {
    evt.preventDefault();
    const { email, password, passwordConfirm, kelas, name, major } = this.state;
    const { emailSignUpStart } = this.props;
    await emailSignUpStart({
      email,
      password,
      passwordConfirm,
      kelas,
      name,
      major
    });
    this.setState({
      email: '',
      password: '',
      passwordConfirm: '',
      kelas: '',
      name: '',
      major: ''
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    const { email, password, passwordConfirm, name } = this.state;
    return (
      <div className="sign-up">
        <h2 className="sign-up__title">I do not have an account</h2>
        <span className="sign-up__sub">
          Sign up with your email and password
        </span>
        <form className="sign-up__form" onSubmit={this.handleSubmitSignUp}>
          <div className="secure__svg-box">
            <SecureSVG className="secure__svg" />
          </div>
          <FormInput
            name="name"
            type="name"
            label="Name"
            value={name}
            placeholder="Full Name"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={email}
            placeholder="Email Address"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={password}
            placeholder="Password"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="passwordConfirm"
            type="password"
            label="Password Confirm"
            value={passwordConfirm}
            placeholder="Password Confirm"
            handleChange={this.handleChange}
            required
          />
          <FormRadio
            name="kelas"
            items={[10, 11, 12]}
            handleChange={this.handleChange}
            label="Kelas"
            required
          />
          <FormRadio
            name="major"
            items={['ipa', 'ips']}
            handleChange={this.handleChange}
            label="Jurusan"
            required
          />

          <div className="sign-up__button">
            <ButtonSlide type="submit" value="Submit Form">
              Sign Up
            </ButtonSlide>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailSignUpStart: (userData) => dispatch(emailSignUpStart(userData))
});

export default connect(null, mapDispatchToProps)(SignUp);
