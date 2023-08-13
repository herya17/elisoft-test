import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='card'>
      <div className='header-content'>
        <h2>Elisoft Test</h2>
      </div>
      <div className='body-content'>
        <h3>Hallo, Selamat Datang di Elisoft Test.</h3>
      </div>
      <div className='action-button'>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
    </div>
  );
}

export default HomePage;
