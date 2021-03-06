import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux'

import Input from '../components/Input';

import * as actions from '../_actions/index';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(formData) {
    console.log('onSubmit() got called');
    console.log('formData', formData);
    // We need to call some actionCreator
    await this.props.signUp(formData)
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="row">
      <div className="col">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <Field
            name="email"
            type="text"
            id="email"
            label="Enter your email"
            placeholder="example@example.com"
            component={Input} />
          </fieldset>
          <fieldset>
            <Field
              name="password"
              type="password"
              id="password"
              label="Enter your password"
              placeholder="Your secret password"
              component={Input}
            />
          </fieldset>

          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
      <div className="col">
        <div className="text-center">
          <div className="alert alert-primary">
            Or sign up using third party services
          </div>
          <button className="btn btn-light">Facebook</button>
          <button className="btn btn-light">Google</button>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(null, actions),
  reduxForm({ form: 'signup' })
)(SignUp)


