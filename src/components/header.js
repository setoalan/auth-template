import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link to="/signout" className="nav-link">Sign Out</Link>
        </li>
      );
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-link">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-faded rounded navbar-toggleable-md">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#containerNavbar" aria-controls="containerNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">auth-template</Link>

        <div className="collapse navbar-collapse" id="containerNavbar">
          <ul className="navbar-nav mr-auto">
            {this.renderLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
