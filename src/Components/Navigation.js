import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BallesterosProduce
          </Link>
          <div className="navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
              <Link className="nav-link" to="/cart">
                  🛒
              </Link>
          </div>
        </div>
      </nav>
    )
}

export default Navigation