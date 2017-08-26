import React, { Component } from 'react';
import { connect } from 'react-redux'; //import connect helper
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContentHelper() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/instagram" className="hoverable">
              <span className="black-text ">Instagram Login</span>
            </a>
          </li>
        );

      default:
        return (
          <li>
            <a href="/api/logout" className="hoverable">
              Log out
            </a>
          </li>
        );
    }
  }

  render() {
    console.log(this.props.auth);
    return (
      <nav className="yellow darken-3">
        <div className="nav-Wrapper  container">
          <Link className="left brand-logo" href="/">
            Loor
          </Link>
          <ul className="right">
            {this.renderContentHelper()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
