// import { useState } from 'react';
// import * as React from "react";

import './Navbar.css';

function Navbar() {
  return (
    <div className="header">
<div id="innerheader">
      <div id="innerHeadContainer1">
        <h2>The Artifacts</h2>
        <h4>
          <i>Culture & Art blog</i>
        </h4>
      </div>
      <div color="black" id="innerHeadContainer2">
        <div data-testid="custom-element" className="options">
          <h5>Blog</h5>
          <h5>About</h5>
          <h5>Contact</h5>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Navbar;
