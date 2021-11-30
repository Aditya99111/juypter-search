import React from 'react'
import "./Search.css"
import JSONDATA from "../MOCK_DATA.json"
import { useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import { Line } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )




const Search = () => {
    
    const [searchTerm, setSearchterm] = useState('')

    const [visible, setVisible] = useState(10)

    const showMore = () => {
        setVisible((prevValue) => prevValue + 10)
    }
    
    return (
        <section className="searchpage">

                    <div className="maincontent">
                <div className="searchbar">
                    <form action="">
                        <input className="box" type="text" placeholder="Search here" onChange={event => { setSearchterm(event.target.value) }} />
                        <select name="categories" id="categories">
                            <option value="electronices">electronices</option>
                            <option value="toys">toys</option>
                            <option value="home">home</option>
                        </select>
                    </form>
                </div>
                <section class="products" id="products">
                    <h1 class="heading"> latest <span>products</span> </h1>
                    <p className="pricefilter"> sort by: <select name="price" id="price">
                            <option value="price">price</option>
                            <option value="low-to-high">low to high</option>
                            <option value="high-to-low">high to low</option>
                        </select> </p>
                    <div class="box-container" >
                        {JSONDATA.filter((val) => {
                            if (searchTerm === "") {
                                return val
                            }
                            else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                            else if (val.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                            
                        }).slice(0, visible).map((val, key) => {
                            return (
                                <>
                                    <div class="box" key={key}>
                                        <span class="discount">-10%</span>
                                        <div class="image">
                                            <img src="images/img-1.jpg" alt="" />
                                            <div class="icons">
                                                <a href="#popup2" class="cart-btn">view Details</a>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h3> {val.first_name} </h3>
                                            <p>{val.description}</p>
                                            <div class="price"> ${val.price}.99 <span>$15.99</span> </div>
                                        </div>
                                    </div>

                                   
                                </>
                            )
                        })}

                        {JSONDATA.map((value,key)=>{
                            return(
                                <div id="popup2" class="overlay light" key={key}>
                                        <a class="cancel" href="#"></a>
                                        <div class="popup">
                                            <div class="content1">
                                                <h1 class="heading">{value.first_name}</h1>
                                                <div className="right">
                                                    <div className="popupicons">
                                                        <div className="popupprice">
                                                            <i class="fas fa-dollar-sign"></i>
                                                            <br />
                                                            100$
                                                        </div>
                                                        <div className="popuporder">
                                                            <i class="fas fa-shopping-cart"></i>
                                                            <br />
                                                            100
                                                        </div>
                                                        <div className="popuprank">
                                                            <i class="fas fa-trophy"></i>
                                                            <br />
                                                            10
                                                        </div>

                                                    </div>
                                                    <div className="graph">

                                                        <Line
                                                          height={400} 
                                                          width={400}
                                                            data={{
                                                                type: 'category',
                                                                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                                                datasets: [
                                                                    {
                                                                        label: "label",
                                                                        data: [22, 33, 30, 44, 22, 33],
                                                                        backgroundColor: [
                                                                            'rgba(255, 99, 132, 0.2)',
                                                                            'rgba(54, 162, 235, 0.2)',
                                                                            'rgba(255, 206, 86, 0.2)',
                                                                            'rgba(75, 192, 192, 0.2)',
                                                                            'rgba(153, 102, 255, 0.2)',
                                                                            'rgba(255, 159, 64, 0.2)'
                                                                        ],
                                                                        borderColor: [
                                                                            'rgba(255, 99, 132, 1)',
                                                                            'rgba(54, 162, 235, 1)',
                                                                            'rgba(255, 206, 86, 1)',
                                                                            'rgba(75, 192, 192, 1)',
                                                                            'rgba(153, 102, 255, 1)',
                                                                            'rgba(255, 159, 64, 1)'
                                                                        ],
                                                                        borderWidth: 1
                                                                    }
                                                                ]
                                                            }}
                                                            options={{
                                                                maintainAspectRatio: false
                                                            }}

                                                        />
                                                    </div>


                                                </div>
                                                <div className="left">
                                                    <div className="popupimage">
                                                        <img src="images/img-1.jpg" alt="" />
                                                    </div>
                                                    <button className="btn">view on store</button>

                                                </div>

                                            </div>
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
