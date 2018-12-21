import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { USERS } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';

// Import custom components
import SignUpForm from '../../components/auth/SignUpForm';

class SignUpContainer extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      submitForm: PropTypes.func.isRequired,
    }).isRequired,
  };

  /**
   * Submit the form.
   *
   * @param {object} formProps
   */
  submitForm = (formProps) => {
    const { actions } = this.props;
    const { submitForm } = actions;
    submitForm(USERS, formProps);
  };

  render() {
    return <SignUpForm onSubmit={this.submitForm} />;
  }
}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, crudAction), dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(SignUpContainer);
