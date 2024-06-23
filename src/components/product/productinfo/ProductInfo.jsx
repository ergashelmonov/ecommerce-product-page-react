import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Context } from "../../../App";
import Cart from "../../../assets/icons/cart.svg";
import "./productInfo.css";

const ProductInfo = () => {
  const [count, setCount] = useState(0);
  const { setProductCount } = useContext(Context);
  return (
    <div className="product-info">
      <h3 className="product-info_company">Sneaker Company</h3>
      <h1 className="product-info_title">Fall Limited Edition Sneakers</h1>
      <p className="product-info_description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <p className="price-cost">
          $125.00
          <span>50%</span>
        </p>
        <s>$250.00</s>
      </div>
      <div className="btns">
        <div className="counter-btns">
          <button
            onClick={() =>
              setCount((m) => {
                if (m > 0) {
                  return m - 1;
                }
                return 0;
              })
            }
          >
            -
          </button>
          <p>{count}</p>
          <button onClick={() => setCount(() => count + 1)}>+</button>
        </div>
        <button
          className="add-cart_btn"
          onClick={() => {
            setProductCount(count);
            setCount(0);
          }}
        >
          <Cart />
          Add to cart
        </button>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  //   productCount: PropTypes.number,
  setProductCount: PropTypes.func,
};
export default ProductInfo;
