import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/admin" activeClassName="active">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/account" activeClassName="active">Account</NavLink>
        </li>
        <li>
          <NavLink to="/product" activeClassName="active">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
