import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'

import Input from '../components/Input';

// import { Container } from './styles';

class SignUp extends Component {
  onSubmit(formData) {
    console.log('onSubmit() got called');
    console.log('formData', formData);
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div className="row">
      <div className="col">
        <form onSubmit={handleSubmit(this.onSubmit)}>
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

export default reduxForm({ form: 'signup' })(SignUp)
