import React from 'react'
import "./Home.css"
import rocket from "./rocket.svg" 
const Home = () => {
    return (

        <section className="home" id="home">

            <div className="content">
                <h3>Take your store to the moon!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum Lorem </p>
                <form action="">
                    <input type="text" placeholder="Search.." className="box search" />
                </form>
                <a href="/search.html"><button className="btn">Search!</button></a>

            </div>

            <div className="image">
                <img src={rocket} alt="" />
            </div>

            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>

        </section>

    )
}

export default Home
