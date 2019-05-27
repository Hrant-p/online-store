import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import Search from'./Search';
import './Navbar.css'
import { ButtonContainer } from './Button';

 class Navbar extends Component {
    render() {
        return (
          <div>
            <nav className="nav-bar">
              <div className="left-side">
                <Link to="/" className="brand">
                  <img src={logo} alt="store" className="nav-logo" />
                </Link>

                <ul className="nav-ul">
                  <li className="nav-li">
                    <Link to="/products" className="nav-link">
                      Products
                    </Link>
                  </li>
                  <li className="nav-li">
                    <Link to="/" className="nav-link">
                      <span>Lorem</span>
                    </Link>
                  </li>
                  <li className="nav-li">
                    <Link to="/" className="nav-link">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="right-side">
                <Search />
                <Link to="/cart" className="brand">
                  <ButtonContainer>
                    <span className="cart-icon">
                      <i className="fas fa-cart-plus" />
                    </span>
                    <span>My Cart</span>
                  </ButtonContainer>
                </Link>
              </div>
            </nav>
          </div>
        );
    }
};

export default Navbar;