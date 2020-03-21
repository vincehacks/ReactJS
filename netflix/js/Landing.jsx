/* Created by Vince Chang
 * This is an function based React component that will be the landing page of
 * the whole application. It will allow to link to browse all shows.
 * <input type="text" placeholder="Search" />
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>Vince's Netflix</h1>
    <Link to="/search"> Browse All </Link>
  </div>
);
export default Landing;
