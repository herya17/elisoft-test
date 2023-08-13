import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/table-data'>Table</Link></li>
        <li><Link to='/nested-menu'>Menus</Link></li>
        <li><Link to='/list-profile-github'>List</Link></li>
        <li><Link to='/caseone'>caseOne</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
