import React from 'react'
import "./Testimonials.css"
import user1 from "./pic-1.png"
import user2 from "./pic-2.png"
import user3 from "./pic-3.png"
const Testimonials = () => {
    return (
        
<section className="review" id="review">

<h1 className="heading"> client's <span>review</span> </h1>

<div className="box-container">

    <div className="box">
        <div className="user">
            <img src={user1} alt=""/>
            <div className="info">
                <h3>john deo</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
            <i className="fas fa-quote-right"></i>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui rerum ducimus, fuga numquam itaque modi magnam officiis obcaecati! Aliquid delectus aperiam harum voluptas animi unde sapiente quidem laudantium facere? Deserunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum explicabo illo libero modi quos laboriosam, totam eligendi. Adipisci, itaque.</p>
    </div>

    <div className="box">
        <div className="user">
            <img src={user2} alt=""/>
            <div className="info">
                <h3>john deo</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
            <i className="fas fa-quote-right"></i>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui rerum ducimus, fuga numquam itaque modi magnam officiis obcaecati! Aliquid delectus aperiam harum voluptas animi unde sapiente quidem laudantium facere? Deserunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum explicabo illo libero modi quos laboriosam, totam eligendi. Adipisci, itaque.</p>
    </div>

    <div className="box">
        <div className="user">
            <img src={user3} alt=""/>
            <div className="info">
                <h3>john deo</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
            <i className="fas fa-quote-right"></i>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui rerum ducimus, fuga numquam itaque modi magnam officiis obcaecati! Aliquid delectus aperiam harum voluptas animi unde sapiente quidem laudantium facere? Deserunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum explicabo illo libero modi quos laboriosam, totam eligendi. Adipisci, itaque.</p>
    </div>

</div>

</section>
    )
}

export default Testimonials
