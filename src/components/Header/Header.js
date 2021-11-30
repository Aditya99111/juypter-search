import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
    return (

        <header className="header">

            <Link to="/" className="logo">Jupiter Search.</Link>

            <nav className="navbar">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
                <Link to="/search" className="try">Try now!</Link>

            </nav>

            <div id="menu-btn" className="fas fa-bars"></div>

        </header>
    )
}

export default Header
