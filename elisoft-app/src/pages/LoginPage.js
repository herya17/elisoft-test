import React from 'react';
import ActionButton from '../components/ActionButton';
import useInput from '../hooks/useInput';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');

  const onSubmitEventHandler = () => {
    window.alert('Login button clicked');
  }

  return (
    <div className='card'>
      <h2>Login</h2>
      <form onSubmit={onSubmitEventHandler} className='card-input'>
        <input 
          type='text' 
          placeholder='Email'
          required
          value={email}
          onChange={handleEmailChange} />
        <input 
          type='password' 
          placeholder='Password'
          required
          value={password}
          onChange={handlePasswordChange} />
        <ActionButton text='Login' />
      </form>
      <p>Don't have an account? <Link to='/register'>Register</Link></p>
    </div>
  );
}

export default LoginPage;
