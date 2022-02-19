import React from 'react';

import  './Navbar.css';

const navbar = props => {
  return (
    <div className="nav">
      <h1>CommitViewer</h1>

      <div>
        <ul className="nav-links">
          <li className="nav-link-about">About</li>
          <li className="nav-link-contact">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
