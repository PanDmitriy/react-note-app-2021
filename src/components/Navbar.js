import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <div className="navbar-brand">Note APP</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>Home page</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About page</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
)