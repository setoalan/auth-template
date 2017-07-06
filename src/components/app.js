import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>auth-template</h1>
        {this.props.children}
      </div>
    );
  }
}
