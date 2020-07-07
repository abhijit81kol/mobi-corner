import React, { Component } from "react";

import './Header.css';
import MobiCornerLogo from '../../Assets/Images/MobiCorner-Logo.png';

export default class Header extends Component {
  render() {
    return (
      <div className="top-header">

        <div className="branding">
          <a href="/">
            <img src={MobiCornerLogo} alt="Mobi Corner" />
          </a>
        </div>

        <div className="search">
          asdasdsa
        </div>

        <nav class="user-navigation">
          asdasdsa
        </nav>
        
      </div>
    );
  }
}
