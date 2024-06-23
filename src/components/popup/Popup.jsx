import PropTypes from "prop-types";
import Skm from "../../assets/images/sneaker-main.png";
import Clear from "../../assets/icons/cleer.svg";
import { useContext } from "react";
import { Context } from "../../App";
import "./popup.css";

const Popup = () => {
  const { productCount, setProductCount } = useContext(Context);
  return (
    <div className="cart-popup">
      <h2>Cart</h2>
      <div className="products">
        {productCount == 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div>
              <img src={Skm} alt="product" />
              <div className="product-infos">
                <h3>Fall Limited Edition Sneakers</h3>
                <p>
                  $125.00 x {productCount} <span>${productCount * 125}.00</span>
                </p>
              </div>
              <Clear className="clear" onClick={() => setProductCount(0)} />
            </div>
            <button className="clear-btn" onClick={() => setProductCount(0)}>
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

Popup.propTypes = {
  productCount: PropTypes.number,
  setProductCount: PropTypes.func,
};

export default Popup;
