import { createContext, useState } from "react";
import Header from "./components/header/Header";
import ProductPhotos from "./components/product/productPhoto/ProductPhotos";
import ProductInfo from "./components/product/productinfo/ProductInfo";
import Modal from "./components/modal/Modal";
import "./style/main.css";

export const Context = createContext(null);
function App() {
  const [productCount, setProductCount] = useState(0);
  const [isModal, setIsModal] = useState(false);
  return (
    <Context.Provider
      value={{ productCount, setProductCount, isModal, setIsModal }}
    >
      {isModal ? <Modal /> : ""}
      <Header />
      <main>
        <ProductPhotos />
        <ProductInfo />
      </main>
    </Context.Provider>
  );
}

export default App;
