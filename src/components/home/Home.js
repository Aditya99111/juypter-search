import React,{useState} from 'react'
import "./Home.css"
import rocket from "./rocket.svg" 
import {Link} from "react-router-dom"

const Home = () => {
    const [input, setInput] = useState(''); 
    const search =()=>{
        if (input === "") {
            alert("please fill in the textarea")
        } 
    }
    return (

        <section className="home" id="home">

            <div className="content">
                <h3>Take your store to the moon!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum Lorem </p>
                <form action="">
                    <input value={input} onInput={e => setInput(e.target.value)} type="text" placeholder="Search.." className="box search" />
                </form>
                <Link to="/search"><button className="btn" onClick={search}>Search!</button></Link>

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
