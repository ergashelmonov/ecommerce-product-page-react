import PropTypes from "prop-types";
import {createContext, useContext, useEffect, useRef, useState} from "react";
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
  const clickRef = useRef()



  useEffect(()=>{
    clickRef.current.onclick=(e)=>{
      console.log(e.target)
      isPopup?setIsPopup(e.target.tagName!=='h2'&& e.target.className!=='products'
      && e.target.className!=='clear-btn'&& e.target.className!=='clear'&&e.target.tagName!=='path'?!isPopup:isPopup):''
    };
  },[isPopup])


  return (
    <>
      <ModalContext.Provider value={{ modal, setModal }}>
        {modal ? (<HeaderModal /> ): ""}

        {modal ? document.body.classList.add('body-scroll') : document.body.classList.remove('body-scroll')}

      </ModalContext.Provider>
      <header className="header" ref={clickRef}>
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
                  className={key === activeId ? "nav-list_active" : ""}
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
