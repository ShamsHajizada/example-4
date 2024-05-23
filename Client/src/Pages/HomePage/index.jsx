import React from "react";
import "../HomePage/style.scss";
const HomePage = () => {
  return (
    <div className="container">
      <section className="img-section">
       
        <div className="txt-img">
          <p>SPRING / SUMMER COLLECTION 2017</p>
          <h1>Get up to 30% Off New Arrivals</h1>
          <button>SHOP NOW!</button>
        </div>
      </section>

      <section className="cards">
        <div className="women">
          <img
            src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg"
            alt=""
          />
          <h2>WOMEN'S</h2>
        </div>
        <div className="acc">
          <img
            src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg"
            alt=""
          />
          <h2>ACCESSORIES'S</h2>
        </div>
        <div className="men">
          <img
            src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg"
            alt=""
          />
          <h2>MEN'S</h2>
        </div>
      </section>
      <section className="login">
        <div className="txt-log">
          {" "}
          <h1>Newsletter</h1>
          <p>Subscribe to our newsletter and get 20% off your first purchase</p>
        </div>
        <div className="input">
          <input type="text" placeholder="Your email" />
          <button>SUBSCRIBE</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
