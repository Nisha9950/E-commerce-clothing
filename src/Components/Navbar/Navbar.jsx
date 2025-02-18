import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import account from "../assets/account.jpg"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Account from "../Account/Account";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems, getTotalCartAmount } = useContext(ShopContext);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  const handleCartClick = () => {
    setShowPopup(true); // Show popup
    setTimeout(() => {
      setShowPopup(false); // Hide popup after 3 seconds
    }, 4000);
  };


  return (
    <div className="navbar">

      <div className="nav-logo">

        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        {/* Cart Button with Pop-Up */}
        <div className="cart-container"
        >
          <button style={{ fontSize: "20px", cursor: "pointer" }}>
            <img

              src={cart_icon}
              alt="Cart"
              className="cart-icon"

              onClick={handleCartClick}
            /></button>
          {getTotalCartItems() > 0 && (
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          )}


          {/* Pop-Up Box */}
          {showPopup && (
            <div className="cart-popup"
            >
              <p>{getTotalCartItems()} Items</p>
              <p>Net Total: ${getTotalCartAmount().toFixed(2)}</p>
              <Link to="/cart">
                <button style={{
                  width: '157px',
                  height: '58px',
                  backgroundColor: ' rgb(95, 87, 87)',
                  color: 'white',
                  padding: ' 8px 12px',
                  border: ' none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(220, 69, 69)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(95, 87, 87)'}>VIEW CART</button>
              </Link>

            </div>
          )}
        </div>
        <div className="account">
          <Account />

        </div>

      </div>

    </div>
  );
};

export default Navbar;








