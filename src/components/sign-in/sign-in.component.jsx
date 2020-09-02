import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import ButtonSlide from '../button-slide/button-slide.component';
import ButtonText from '../button-text/button-text.component';
import { connect } from 'react-redux';
import {
  emailSignInStart,
  forgotPasswordStart
} from '../../redux/auth/auth.actions';
import { ReactComponent as AuthSVG } from '../../assets/undraw_auth.svg';
import { ReactComponent as LoginSVG } from '../../assets/undraw_login.svg';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailLogin: '',
      password: '',
      emailReset: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
    this.handleSubmitForgotPass = this.handleSubmitForgotPass.bind(this);
  }

  async handleSubmitSignIn(evt) {
    evt.preventDefault();
    const { emailSignInStart } = this.props;
    const { emailLogin, password } = this.state;
    await emailSignInStart({ emailLogin, password });
    this.setState({
      emailLogin: '',
      password: ''
    });
  }

  async handleSubmitForgotPass(evt) {
    evt.preventDefault();
    const { forgotPasswordStart } = this.props;
    const { emailReset } = this.state;
    await forgotPasswordStart({ emailReset });
    this.setState({
      emailReset: ''
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    const { emailLogin, emailReset, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="sign-in__title">I already have an account</h2>
        <span className="sign-in__sub">
          Sign in with your email and password
        </span>
        <form className="sign-in__form" onSubmit={this.handleSubmitSignIn}>
          <div className="login__svg-box">
            <LoginSVG className="login__svg" />
          </div>
          <FormInput
            name="emailLogin"
            type="email"
            label="Email"
            value={emailLogin}
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
          <div className="sign-in__button">
            <ButtonSlide type="submit" value="Submit Form">
              Sign In
            </ButtonSlide>
          </div>
        </form>

        <span className="sign-in__sub">Forgot your password</span>
        <form className="sign-in__form" onSubmit={this.handleSubmitForgotPass}>
          <div className="forgot__svg-box">
            <AuthSVG className="forgot__svg" />
          </div>
          <FormInput
            name="emailReset"
            type="email"
            label="Email"
            value={emailReset}
            placeholder="Email Address"
            handleChange={this.handleChange}
            required
          />
          <div className="sign-in__button">
            <ButtonText type="submit" value="Submit Form">
              Forgot Password
            </ButtonText>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (emailAndPassword) =>
    dispatch(emailSignInStart(emailAndPassword)),
  forgotPasswordStart: (email) => dispatch(forgotPasswordStart(email))
});

export default connect(null, mapDispatchToProps)(SignIn);
