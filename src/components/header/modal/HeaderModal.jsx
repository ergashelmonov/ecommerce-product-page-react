import { useContext } from "react";
import { ModalContext } from "../Header";
import Cross from "../../../assets/icons/cross.svg";
import "./headerModal.css";

const navListData = [
  { key: 1, text: `Collections`, link: "#!" },
  { key: 2, text: `Men`, link: "#!" },
  { key: 3, text: `Women`, link: "#!" },
  { key: 4, text: `About`, link: "#!" },
  { key: 5, text: `Contact`, link: "#!" },
];

const HeaderModal = () => {
  const { modal, setModal } = useContext(ModalContext);
  return (
    <div className="header-modal_wrapper">
      <div className="header-modal">
        <Cross className="close" onClick={() => setModal(!modal)} />
        <ul className="navbar-list">
          {navListData.map((elm) => {
            const { key, text, link } = elm;
            return (
              <li key={key}>
                <a href={link}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeaderModal;
