// Created by Vince Chang

import React from 'react';
import { Link } from 'react-router-dom';

/* Function: Header
 * Description: This function will create the url links to each route.
 */
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