import React, { useState, useEffect } from "react";
import "./Search.css";
import JSONDATA from "../MOCK_DATA.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useLocation, useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Search = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const [searchTerm, setSearchterm] = useState(undefined);
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(10);

  useEffect(() => {
    if (location.search !== "") {
      const input = location.search.split("=")[1];
      setSearchterm(input);
    } else {
      setSearchterm("");
    }
    setProducts(JSONDATA);
  }, []);

  const showMore = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  function handleSort(e) {
    if (e.target.value === "low-to-high") {
      const sortedProducts = [...products];
      sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setProducts(sortedProducts);
    } else {
      const sortedProducts = [...products];
      sortedProducts.sort((b, a) => parseFloat(a.price) - parseFloat(b.price));
      setProducts(sortedProducts);
    }
  }

  if (searchTerm === undefined) return <p>Loading...</p>;

  return (
    <section className="searchpage">
      <div className="maincontent">
        <div className="searchbar">
          <form action="">
            <input
              className="box"
              type="text"
              placeholder="Search here"
              onChange={(event) => {
                setSearchterm(event.target.value);
              }}
            />
            <select name="categories" id="categories">
              <option value="electronices">electronices</option>
              <option value="toys">toys</option>
              <option value="home">home</option>
            </select>
          </form>
        </div>
        <section class="products" id="products">
          <h1 class="heading">
            {" "}
            latest <span>products</span>{" "}
          </h1>
          <p className="pricefilter">
            {" "}
            sort by:{" "}
            <select onChange={handleSort} name="price" id="price">
              <option value="price">price</option>
              <option value="low-to-high">low to high</option>
              <option value="high-to-low">high to low</option>
            </select>{" "}
          </p>
          <div class="box-container">
            {products
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.first_name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return val;
                } else if (
                  val.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .slice(0, visible)
              .map((val, key) => {
                console.log(val);
                return (
                  <div class="box" key={key}>
                    <span class="discount">-10%</span>
                    <div class="image">
                      <img src="/images/img-1.jpg" alt="" />

                      <div class="icons">
                        <a
                          href="javascript:void(0)"
                          class="cart-btn"
                          onClick={() => {
                            navigate(`/product/${val.id}`);
                          }}
                        >
                          view Details
                        </a>
                      </div>
                    </div>


                    <div class="content">
                      <h3> {val.first_name} </h3>
                      <p>{val.description}</p>
                      <div class="price">
                        {" "}
                        ${val.price}.99 <span>$15.99</span>{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <button className="btn" onClick={showMore}>
            load more
          </button>
        </section>
      </div>
    </section>
  );
};

export default Search;