// Created by Vince Chang

import React from 'react';
import { Link } from 'react-router-dom';

/* =========================================================================
* Function Name: Header
* Task: This React function based component will create the routes to each page
  ========================================================================= */
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;