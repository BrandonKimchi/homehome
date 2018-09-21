import React, { Fragment } from 'react'
import HeaderBar from './HeaderBar'

class RegisterPage extends React.Component {
  render() {
    return (
      <Fragment>
        <HeaderBar title="HomeHome - Register" />
        <div>
          <h2 class="centered">Create a new account</h2>
          <form id="registerForm"
            method="post"
            action="/register_account">
            Username: <input name="username" /><br/>
            Password: <input name="password" /><br/>
            Repeat password:<input name="repeat_password" /><br/>
            <input type="submit" />
          </form>
        </div>
      </Fragment>
    );
  }
}

export default RegisterPage
