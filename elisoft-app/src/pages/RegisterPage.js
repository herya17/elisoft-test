import React from 'react';
import ActionButton from '../components/ActionButton';
import useInput from '../hooks/useInput';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [name, handleNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [confirmPassword, handleConfirmPasswordChange] = useInput('');

  const onSubmitEventHandler = () => {
    window.alert('Register button clicked');
  }

  return (
    <div className='card'>
      <h2>Register</h2>
      <form onSubmit={onSubmitEventHandler} className='card-input'>
        <input
          type='text'
          placeholder='Name'
          required
          value={name}
          onChange={handleNameChange} />
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
        <input 
          type='password' 
          placeholder='Confirm Password'
          required
          value={confirmPassword}
          onChange={handleConfirmPasswordChange} />
        <ActionButton text='Register' />
      </form>
      <p>Have an account? <Link to='/login'>Login</Link></p>
    </div>
  );
}

export default RegisterPage;
