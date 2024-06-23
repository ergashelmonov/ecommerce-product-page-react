import { useContext, useState } from "react";
import { Context } from "../../../App";
import Skm from "../../../assets/images/sneaker-main.png";
import Sks from "../../../assets/images/senaker-second.png";
import Skth from "../../../assets/images/sneaker-third.png";
import Skf from "../../../assets/images/sneaker-four.png";
import Arrow from "../../../assets/icons/arrow.svg";
import "./productPhotos.css";

const images = [
  { id: 1, url: Skm },
  { id: 2, url: Sks },
  { id: 3, url: Skth },
  { id: 4, url: Skf },
];

const ProductPhotos = () => {
  const [photoId, setPhotoId] = useState(1);
  const { isModal, setIsModal } = useContext(Context);
  return (
    <div className="product-photos">
      <div className="main-photo">
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
        <img
          src={images[photoId - 1].url}
          alt="product photo"
          onClick={() => setIsModal(!isModal)}
        />
      </div>
      <div className="collection-photo">
        {images.map(({ id, url }) => {
          return (
            <div key={id} className={photoId == id ? "active-img" : ""}>
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
  );
};

export default ProductPhotos;
