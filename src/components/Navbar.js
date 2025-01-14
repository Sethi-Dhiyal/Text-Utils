import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link for routing

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.homeTown}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {/* Color Mode Switches */}
          <div className="d-flex">
            <button
              className="btn btn-light mx-1"
              onClick={() => props.changeMode('light')}
            >
              Light Mode
            </button>
            <button
              className="btn btn-dark mx-1"
              onClick={() => props.changeMode('dark')}
            >
              Dark Mode
            </button>
            <button
              className="btn btn-primary mx-1"
              onClick={() => props.changeMode('blue')}
            >
              Blue Mode
            </button>
            <button
              className="btn btn-success mx-1"
              onClick={() => props.changeMode('green')}
            >
              Green Mode
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  homeTown: PropTypes.string,
  mode: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About',
  homeTown: 'Home',
};
