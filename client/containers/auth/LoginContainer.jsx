import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authService from '../../services/authService';

// Import custom components
import LoginForm from '../../components/auth/LoginForm';

class LoginContainer extends Component {
  /**
   * Submit the form.
   *
   * @param {object} formProps
   */
  submitForm = (formProps) => {
    const { login } = this.props.actions;
    login(formProps);
  };

  render() {
    const { errorMessage } = this.props;

    return <LoginForm onSubmit={this.submitForm} errorMessage={errorMessage} />;
  }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
  token: state.auth.token,
  isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.auth.errorMessage,
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, authService), dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
