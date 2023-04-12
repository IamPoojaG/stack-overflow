import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import Person from '../../components/Person/Person.js';

import './navbar.css';

const Navbar = () => {
  let User = 123;
  return (
    <nav>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
          <img className='nav-img' src={logo} alt='logo' />
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          About
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          Products
        </Link>
        <Link to='/' className='nav-item nav-btn'>
          For Terms
        </Link>
        <form>
          <input type='text' placeholder='Search...' />
          <img src={search} alt='search' width='18' className='search-icon' />
        </form>
        {User === null ? (
          <Link to='/' className='nav-item nav-links'>
            Login
          </Link>
        ) : (
          <>
            <Person>
              {' '}
              <Link to='/'>P </Link>
            </Person>

            <button className='nav-item nav-links'>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
