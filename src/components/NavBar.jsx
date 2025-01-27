import React from 'react';
import logo from '../assets/logoSponsor-nav.jpg';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                </a>
                <button
                    className="navbar-toggler"
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
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/category/nuevos">Nuevos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/category/ofertas">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/category/mas-vendidos">Más Vendidos</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
