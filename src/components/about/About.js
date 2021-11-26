import React from 'react'
import "./About.css"
import about from "./about-img.png"
const About = () => {
    return (

        <section className="about" id="about">

            <h1 className="heading"> <span>about</span> us </h1>

            <div className="row">

                <div className="image">
                    <img src={about} alt="about" />
                </div>

                <div className="content">
                    <h3 className="title">Take Your Store To The Moon</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias blanditiis, fugiat consequatur enim amet ullam facere quaerat, quos quae mollitia inventore! Hic, excepturi debitis velit maxime ut in at iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde a ea eius voluptatibus expedita fugiat incidunt pariatur autem doloribus reprehenderit!</p>
                    <a href="#" className="btn">learn more</a>
                </div>

            </div>

        </section>

    )
}

export default About
