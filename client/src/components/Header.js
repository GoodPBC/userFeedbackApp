import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="yellow darken-3">
        <div className="nav-Wrapper  container">
          <a className="left brand-logo" href="/">
            Loor
          </a>
          <ul className="right">
            <li>
              <a className="black-text">Login with instagram</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
