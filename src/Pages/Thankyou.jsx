import React from "react";
import "./CSS/Thankyou.css";
import { Link } from "react-router-dom";
import logo from '../Components/assets/logo.png'



const Thankyou = () => {
  return (
    <div className="containt">
      <div className="order-box" >
        <img src={logo} />
        <h2 className="title">Thanks for your order!</h2>
        <p className="message">
          Your order has been placed and will be processed as soon as possible.
          Make sure you make note of your order number, which is
          <span className="order-number"> 25vb4440k45</span>.
        </p>
        <p className="message">You will be receiving an email shortly with confirmation of your order.</p>
        <div className="button-gro" style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "19px",
          marginleft: "15%"
        }}>
          <Link to="/"><button className="back-button">Go back to shopping</button></Link>
          <Link to="/OrderTimeline"><button className="track-button">Track Order</button></Link>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 Myntra All rights reserved</p>
        <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
      </footer>
    </div>
  );
};

export default Thankyou;