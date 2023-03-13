import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar bg-secondary w-100 mb-3">
            <div className="container-fluid ">
                <a className="navbar-brand text-dark fs-4 fw-semibold" href="#">
                    SANTIAGO ARRAEZ
                </a>
                <button
                    className="navbar-toggler bg-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active text-dark fs-5 fw-semibold " aria-current="page" href="https://github.com/santiagoarraez">
                                Github
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-dark fs-5 fw-semibold " aria-current="page" href="https://instagram.com/santiagoarraez">
                                Instagram
                            </a>
                        </li> <li className="nav-item">
                            <a className="nav-link active text-dark fs-5 fw-semibold " aria-current="page" href="https://twitter.com/santiagoarraez">
                                Twitter
                            </a>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
