import { useContext, useState } from "react";
import { Context } from "../../App";
import Skm from "../../assets/images/sneaker-main.png";
import Sks from "../../assets/images/senaker-second.png";
import Skth from "../../assets/images/sneaker-third.png";
import Skf from "../../assets/images/sneaker-four.png";
import Cross from "../../assets/icons/cross.svg";
import Arrow from "../../assets/icons/arrow.svg";
import "./modal.css";

const images = [
  { id: 1, url: Skm },
  { id: 2, url: Sks },
  { id: 3, url: Skth },
  { id: 4, url: Skf },
];

const Modal = () => {
  const [photoId, setPhotoId] = useState(1);
  const { isModal, setIsModal } = useContext(Context);

  isModal ? document.querySelector('#root').classList.add('body-scroll'): document.querySelector('#root').classList.remove('body-scroll');

  return (
    <div className="modal-wrapper" onClick={({target}) => {
      target.className === "modal-wrapper"&&setIsModal(!isModal)
    }}>
      <div className="modal-photos">
        <button
          className="modal-btn modal-btn_left"
          onClick={() => {
            photoId <= 1 ? setPhotoId(4) : setPhotoId(photoId - 1);
          }}
        >
          <Arrow />
        </button>
        <button
          className="modal-btn modal-btn_right"
          onClick={() => {
            4 <= photoId ? setPhotoId(1) : setPhotoId(photoId + 1);
          }}
        >
          <Arrow />
        </button>
        <Cross className="cross" onClick={() => setIsModal(!isModal)} />
        <div className="modal-main-photo">
          <img src={images[photoId - 1].url} alt="product photo" />
        </div>
        <div className="modal-collection-photo">
          {images.map(({ id, url }) => {
            return (
              <div key={id} className={photoId === id ? "active-img" : ""}>
                <img
                  onClick={() => setPhotoId(id)}
                  src={url}
                  alt="product photo"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
