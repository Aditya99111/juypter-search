import React from 'react'
import "./Search.css"
import JSONDATA from "../MOCK_DATA.json"
import { useState } from 'react'
const Search = () => {
    const [searchTerm, setSearchterm] = useState('')

    const [visible ,setVisible] = useState(10)

    const showMore =()=>{
        setVisible((prevValue)=> prevValue + 10)
    }
    return (
        <section className="searchpage">

            <div className="filters">
            <h1 class="heading"> <span>Filters</span> </h1>

                    <div className="pricefilter">
                    <h1>Price</h1>
                        <input type="range" name="range" id="price" />
                    </div>
                    <div className="rivews">
                    <h1>rivews</h1>
                    <div className="five">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    </div>
                    <div className="four">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    </div>
                    <div className="three">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    </div>
                    </div>
                    <div className="order">
                    <h1>orders</h1>
                        <button className="btn"> &lt; 1000</button>
                        <button className="btn"> &lt; 100</button>
                        <button className="btn"> &lt; 50</button>
                        <button className="btn"> &lt; 10</button>
                    </div>
                    <div className="rank">
                    <h1>Rank</h1>

                    </div>

            </div>



            <div className="maincontent">

                <div className="searchbar">

                    <form action="">
                        <input className="box" type="text" placeholder="Search here" onChange={event => { setSearchterm(event.target.value) }} />
                    </form>
                </div>

                <section class="products" id="products">
                    <h1 class="heading"> latest <span>products</span> </h1>
                    <div class="box-container" >
                        {JSONDATA.filter((val) => {
                            if (searchTerm === "") {
                                return val
                            }
                            else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                        }).slice(0,visible).map((val, key) => {
                            return (
                                    <div class="box" key={key}>
                                        <span class="discount">-10%</span>
                                        <div class="image">
                                            <img src="images/img-1.jpg" alt="" />
                                            <div class="icons">
                                                <a href="#popup1" class="cart-btn">view Details</a>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h3> {val.first_name} </h3>
                                            <p>{val.description}</p>
                                            <div class="price"> $12.99 <span>$15.99</span> </div>
                                        </div>
                                    </div>
                            )
                        })}
                    </div>
                            <button className="btn" onClick={showMore}>load more</button>
                </section>
            </div>


        </section>
    )
}

export default Search
