import React from 'react';
import './styles.css';

function LoginForm() {
  return (
    <div className="page-container">
      <form className="form-container">
        <h3>Log In</h3>
          <label>Username:
            <input type="text" />
          </label>
          <label>Password:
          <input type="text" />
        </label>
      <button type="submit">Submit</button>
    </form>  
  </div>  
  );
}
export default LoginForm;
