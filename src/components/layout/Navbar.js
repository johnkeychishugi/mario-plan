import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOuntLinks from "./SignedOutLinks";

const Navbar = () =>{
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                <SignedInLinks/>
                <SignedOuntLinks/>
            </div>
        </nav>
    );
}

export default Navbar;