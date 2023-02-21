// LoginForm.jsx
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import "../../pages/AuthPage/AuthPage.css"
 
export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      const user = await usersService.login(credentials);
      console.log("UserData: ", user)
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="auth-container">
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input 
            type="text" 
            name="email" 
            value={credentials.email} 
            onChange={handleChange} 
            required />
          <label>Password</label>
          <input 
          type="password" 
          name="password" 
          value={credentials.password} 
          onChange={handleChange} 
          required />
          <button className="auth-button" type="submit">Login</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}