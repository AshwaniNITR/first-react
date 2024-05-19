import React from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary navbar-primary"
        data-bs-theme={`${props.mode}`}
      >
        <div className="container-fluid ">
          <a className="navbar-brand " href="/">
            {props.title}
          </a>
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
                <div className="nav-a active" aria-current="page" href="/">
                  Home
                </div>
              </li>
              &nbsp;
              &nbsp;
              <li className="nav-item">
                <div className="nav-a" href="/">
                  {props.aboutText}
                </div>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch">
               <div className="switch">
               <input onClick={props.togglemode}
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                {props.text}
               </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  aboutText: "About me",
  bg:"light",
};
