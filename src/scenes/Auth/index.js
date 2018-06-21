import React from 'react';
import { shape, object, bool, func } from 'prop-types';

// Redux
import { connect } from 'react-redux';
import * as authActions from 'modules/auth/actions';

// components
import { Form, Icon, Input, Checkbox } from 'antd';
import Button from 'components/Button';
import Title from 'components/Title';

import './styles.css';
const FormItem = Form.Item;

class Auth extends React.Component {
  static propTypes = {
    auth: shape({
      error: bool,
      success: bool,
      isLogin: bool,
      user: object,
    }),
    login: func,
    logout: func,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const { props: { login } } = this;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        login(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { props: { auth }, handleSubmit } = this;

    if (auth.success) {
      return null;
    }

    return (
      <Form onSubmit={handleSubmit} className="login-form">
        <Title>Please, fill the form bellow</Title>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  login: authActions.login,
  logout: authActions.logout,
}

const WrappedAuth = Form.create()(Auth);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedAuth);
