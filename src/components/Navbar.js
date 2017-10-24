import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <header>
          <h1>React Book Club</h1>
          <nav className='main-nav'>
            <ul>
              <li id="Home">Home</li>
              <li id="About">About</li>
              <li id="Contact">Contact</li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
