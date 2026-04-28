import Header from "./components/header";

import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";
import cartIcon from "./assets/images/icon-cart.svg";
import arrowNextIcon from "./assets/images/icon-next.svg";
import arrowPreviousIcon from "./assets/images/icon-previous.svg";
import Image1 from "./assets/images/image-product-1.jpg";
import image2 from "./assets/images/image-product-2.jpg";
import image3 from "./assets/images/image-product-3.jpg";
import image4 from "./assets/images/image-product-4.jpg";
import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  const images = [Image1, image2, image3, image4];
  const [imageIndex, setImageIndex] = useState(0);

  function handleAddProduct() {
    if (quantity > 0) {
      setCartQuantity((prev) => prev + quantity);
      setQuantity(0);
    } else {
      alert("Please select a quantity before adding to cart");
    }
  }

  function handleDelete() {
    setCartQuantity(0);
  }

  return (
    <>
      <Header cart={cartQuantity} onDeleteCart={handleDelete} />

      <main className=" lg:flex lg:max-w-7xl lg:m-auto ">
        <section className="w-screen relative select-none">
          <img src={images[imageIndex]} className="w-full lg:max-w-xl lg:rounded-xl" />

          <div className="flex justify-between w-full px-3 absolute top-1/2 -translate-y-1/2 lg:hidden">
            <button
              className={`${imageIndex == 0 ? "pointer-events-none opacity-70" : "cursor-pointer"}`}
              onClick={() => setImageIndex((index) => index - 1)}
            >
              <div className="bg-white size-12 rounded-full">
                <img
                  className="absolute top-1/2 -translate-y-1/2 left-7"
                  src={arrowPreviousIcon}
                  alt=""
                />
              </div>
            </button>
            <button
              className={`${imageIndex === images.length - 1 ? "pointer-events-none opacity-70" : "cursor-pointer"}`}
              onClick={() => setImageIndex((index) => index + 1)}
            >
              <div className="bg-white size-12 rounded-full">
                <img
                  className="absolute top-1/2 -translate-y-1/2 right-7"
                  src={arrowNextIcon}
                  alt=""
                />
              </div>
            </button>
          </div>
        </section>

        <section className="px-5 py-8 w-full">
          <p className="font-semibold text-[12px] tracking-widest text-gray-600 lg:text-xl">
            SNEAKER COMPANY
          </p>
          <h2 className="font-bold text-3xl my-3 lg:text-5xl leading-15">
            Fall Limited Edition Sneakers
          </h2>
          <p className="font-light leading-7 my-5 text-gray-600 lg:text-xl">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex justify-between items-center mt-7 lg:flex-col lg:items-baseline lg:gap-5">
            <div className="flex gap-5 items-center">
              <p className="font-bold text-3xl">$125.00</p>
              <p className="font-bold bg-black text-white py-0.5 px-2 rounded-lg">
                50%
              </p>
            </div>
            <p className="line-through font-medium text-gray-500">$250.00</p>
          </div>
          <div className=" lg:flex items-center justify-between lg:gap-5">
            <div className="flex items-center justify-between p-3 mt-5 bg-gray-100 lg:w-1/2">
              <button
                onClick={() => setQuantity((prev) => prev - 1)}
                className={`${quantity == 0 ? "opacity-50 pointer-events-none" : ""}`}
              >
                <img src={minusIcon} />
              </button>
              <p className="font-bold">{quantity}</p>
              <button onClick={() => setQuantity((prev) => prev + 1)}>
                <img src={plusIcon} />
              </button>
            </div>
            <button
              className="flex w-full items-center justify-center p-3 gap-3 bg-orange-500 rounded-lg mt-5 font-bold lg:w-1/2"
              onClick={() => handleAddProduct()}
            >
              <img src={cartIcon} alt="" />
              Add to Cart
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
