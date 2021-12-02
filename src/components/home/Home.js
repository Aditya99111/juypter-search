import React, { useState } from "react";
import "./Home.css";
import rocket from "./rocket.svg";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState("");
  const search = (e) => {
    // e.preventDefault();
    if (input === "") {
      alert("please fill in the textarea");
    } else {
      navigate(`/search/?searchTerm=${input}`);
    }
  };
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Take your store to the moon!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum Lorem{" "}
        </p>
        <form action="">
          <input
            value={input}
            onInput={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search.."
            className="box search"
          />
        </form>

        <button className="btn" onClick={search}>
          Search!
        </button>
      </div>

      <div className="image">
        <img src={rocket} alt="" />
      </div>

      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
    </section>
  );
};

export default Home;
