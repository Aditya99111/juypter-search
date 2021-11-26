import React from 'react'
import "./Contact.css"
const Contact = () => {
    return (

        <section className="contact" id="contact">

            <h1 className="heading"> <span>contact</span> us </h1>

            <div className="icons-container">
                <div className="icons">
                    <i className="fas fa-phone"></i>
                    <h3>our number</h3>
                    <p>+123-456-7890</p>
                    <p>+111-222-3333</p>
                </div>
                <div className="icons">
                    <i className="fas fa-envelope"></i>
                    <h3>our email</h3>
                    <p>Jupitersearch@gmail.com</p>
                    <p>abc@gmail.com</p>
                </div>
                <div className="icons">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>our location</h3>
                    <p>abc, canada - 123456</p>
                </div>
            </div>

            <div className="row">


                <form action="">
                    <input type="text" placeholder="name" className="box" />
                    <input type="email" placeholder="email" className="box" />
                    <input type="number" placeholder="number" className="box" />
                    <textarea name="" placeholder="message" className="box" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="send message" className="btn" />
                </form>

            </div>

        </section>
    )
}

export default Contact
