import React from 'react'
import Home from "./components/home/Home"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Testimonials from "./components/testimonials/Testimonials"

const Landing = () => {
    return (
        <div>
            <Home />
            <About />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default Landing
