import React, { Component } from 'react';
import { connect } from 'react-redux'; //import connect helper

class Header extends Component {
  renderContentHelper() {
    switch (this.props.auth) {
      case null:
        return 'Not Done Yet';

      case false:
        return 'You are Not logged in';

      default:
        return "Hello User Da' Loser";
    }
  }

  render() {
    console.log(this.props.auth);
    return (
      <nav className="yellow darken-3">
        <div className="nav-Wrapper  container">
          <a className="left brand-logo" href="/">
            Loor
          </a>
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
