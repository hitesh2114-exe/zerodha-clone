import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg border-bottom navBar" style={{ height: "4.3rem", backgroundColor: "white" }}>
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand"><img src="Media/image/logo.svg" alt="logo" style={{ width: "16.3%", marginLeft: "11.5rem", marginBottom: "0.5rem" }} /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse nav-item-container" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={"/signup"} style={{ color: "#666666" }}>Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={"/about"} style={{ color: "#666666" }} >About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={"/products"} style={{ color: "#666666" }}>Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={"/pricing"} style={{ color: "#666666" }}>Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={"/support"} style={{ color: "#666666" }}>Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;