import * as React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="header-1 pb-lg-5">
        <nav className="navbar fixed-top navbar-expand-md">
          <div className="container-lg">
            <a className="navbar-brand" href="#">
              <img src="img/logo.png" alt="Logo" className="d-inline-block align-text-top" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0 justify-content-around" id="navbarNavAltMarkup">
              <ul className="navbar-nav list-unstyled">
                <li className="nav-item">
                  <a className="nav-link active" href="#ourService">
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#whyUs">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#testimony">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#question">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
