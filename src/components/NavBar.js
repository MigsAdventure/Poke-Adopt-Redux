import React from 'react';
import { Link } from 'react-router';

export default function NavBar() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="navBarContainer">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Poke-Adopt</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navItemsContainer">
            <li className="linkItem"><Link className="link" to="/">Adopt</Link> </li>
            <li className="linkItem"><Link className="link" to="/trainers">Trainers</Link> </li>
            <li className="linkItem"><Link className="link" to="/my-pokemon">My Pokemon</Link> </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
