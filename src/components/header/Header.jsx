import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { Context } from "../../App";
import HeaderModal from "./modal/HeaderModal";
import Popup from "../popup/Popup";
import Logo from "../../assets/icons/logo.svg";
import User from "../../assets/images/user.png";
import Cart from "../../assets/icons/cart.svg";
import Burger from "../../assets/icons/burger.svg";
import "./header.css";

const navListData = [
  { key: 1, text: `Collections`, link: "#!" },
  { key: 2, text: `Men`, link: "#!" },
  { key: 3, text: `Women`, link: "#!" },
  { key: 4, text: `About`, link: "#!" },
  { key: 5, text: `Contact`, link: "#!" },
];

export const ModalContext = createContext(null);

const Header = () => {
  const [activeId, setActiveId] = useState(1);
  const [isPopup, setIsPopup] = useState(false);
  const [modal, setModal] = useState(false);
  const { productCount } = useContext(Context);
  return (
    <>
      <ModalContext.Provider value={{ modal, setModal }}>
        {modal ? <HeaderModal /> : ""}
      </ModalContext.Provider>
      <header className="header">
        <Burger className="burger" onClick={() => setModal(!modal)} />
        <div className="logo">
          <Logo />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            {navListData.map((elm) => {
              const { key, text, link } = elm;
              return (
                <li
                  key={key}
                  className={key == activeId ? "nav-list_active" : ""}
                  onClick={() => setActiveId(() => key)}
                >
                  <a href={link}>{text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="user-box">
          {isPopup ? <Popup /> : ""}
          <span
            className={productCount > 0 ? "product-sum" : ""}
            data-count={productCount}
          >
            <Cart className="cart" onClick={() => setIsPopup(!isPopup)} />
          </span>
          <img src={User} alt="user photo" className="user-img" />
        </div>
      </header>
    </>
  );
};
Header.propTypes = {
  productCount: PropTypes.number,
  setProductCount: PropTypes.func,
};

export default Header;
