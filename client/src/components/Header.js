import React, { Component } from 'react';
import { connect } from 'react-redux'; //import connect helper
import { Link } from 'react-router-dom';
import Payments from './Payments';

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
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2">
            <a href="/api/logout" className="hoverable">
              Log out
            </a>
          </li>
        ];
    }
  }

  render() {
    console.log(this.props.auth);
    return (
      <nav className="grey darken-4">
        <div className="nav-Wrapper  container">
          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            className="left brand-logo"
          >
            <img
              style={{ padding: 5 }}
              src={require(`../assets/logo-trans.png`)}
              alt="Loor Logo"
            />
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
