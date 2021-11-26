import React from 'react'
import "./Header.css"
const Header = () => {
    return (

        <header className="header">

            <a href="#" className="logo">Jupiter Search.</a>

            <nav className="navbar">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
                <a href="search.html" className="try">Try now!</a>

            </nav>

            <div id="menu-btn" className="fas fa-bars"></div>

        </header>
    )
}

export default Header
