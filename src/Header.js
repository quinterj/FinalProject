import React, { Component } from 'react';
import logo from './img/soccerBall.svg';

class Header extends React.Component {
  render(){
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>2017 UEFA Champions League Semi-Finals</h2>
      </div>)
    }
  }

export default Header;