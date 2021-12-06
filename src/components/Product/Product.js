import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import JSONDATA from "../../MOCK_DATA.json";
import { Link, useLocation } from "react-router-dom";

export default function Product() {
  let location = useLocation();
  const [product, setProduct] = useState(undefined);
  useEffect(() => {
    const id = location.pathname.split("/").pop();
    const product = JSONDATA.find((x) => x.id === Number(id));
    setProduct(product);
  }, []);

  if(!product) return <p>loading...</p>
  
  return (
    <div id="popup2" key={product.id}>
      <div class="popup">
      <Link to="/search" className="cross"><p>X</p></Link>
        <div class="content1">
          <h1 class="heading">{product.first_name}</h1>
          <div className="right">
            <div className="popupicons">
              <div className="popupprice">
                <i class="fas fa-dollar-sign"></i>
                <br />
                {product.price}
              </div>
              <div className="popuporder">
                <i class="fas fa-shopping-cart"></i>
                <br />
                {product.price}
              </div>
              <div className="popuprank">
                <i class="fas fa-trophy"></i>
                <br />
                {product.price}
              </div>
            </div>
            <div className="graph">
              <Line
                height={400}
                width={400}
                data={{
                  type: "category",
                  labels: [
                    "Red",
                    "Blue",
                    "Yellow",
                    "Green",
                    "Purple",
                    "Orange",
                  ],
                  datasets: [
                    {
                      label: "label",
                      data: [22, 33, 30, 44, 22, 33],
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
          <div className="left">
            <div className="popupimage">
              <img src="/images/img-1.jpg" alt="" />
            </div>
            <button className="btn">view on store</button>
          </div>
        </div>
      </div>
    </div>
  );
}