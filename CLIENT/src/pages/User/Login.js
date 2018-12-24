import React from 'react';
import { connect } from 'dva';

export default
@connect(({ login }) => ({
  login: login
}))
class Login extends React.PureComponent {

  render() {
    return <div>login and chat</div>
  }
}