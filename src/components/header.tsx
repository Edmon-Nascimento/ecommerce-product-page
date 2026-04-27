import { useState } from "react";
import menuIcon from "../assets/images/icon-menu.svg";
import closeMenuIcon from "../assets/images/icon-close.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import userImg from "../assets/images/image-avatar.png";
import productImg from "../assets/images/image-product-1-thumbnail.jpg"

function Header({ cart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleCheckout(){
    alert("Proceeding to checkout...")
    setIsCartOpen(prev => !prev)
  }

  return (
    <header className="p-5 relative">
      <section className="flex justify-between w-full items-center">
        <div className="flex items-center gap-5">
          <button
            className="cursor-pointer z-50"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img
              className="size-5 z-50"
              src={isMenuOpen ? closeMenuIcon : menuIcon}
              alt=""
            />
          </button>
          <h1 className="text-4xl font-bold">sneakers</h1>
        </div>

        <div className="flex items-center gap-5">
          <button onClick={() => setIsCartOpen((prev) => !prev)}>
            <img className="size-6" src={cartIcon} alt="" />
          </button>
          <img className="size-8" src={userImg} alt="" />
        </div>
      </section>

      <div
        className={`${isMenuOpen ? "visble" : "invisible"} fixed top-0 left-0 w-screen h-screen bg-black/50 z-40`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      ></div>

      <article
        className={`${isMenuOpen ? "visible" : "invisible"}
                fixed top-0 left-0 w-50 h-screen bg-white z-40
                `}
      >
        <div className="flex flex-col pt-30 pl-8 gap-5">
          <a href="#" className="text-lg font-black">
            Collections
          </a>
          <a href="#" className="text-lg font-black">
            Men
          </a>
          <a href="#" className="text-lg font-black">
            Women
          </a>
          <a href="#" className="text-lg font-black">
            About
          </a>
          <a href="#" className="text-lg font-black">
            Contact
          </a>
        </div>
      </article>

      <div
        className={`${isCartOpen ? "visible" : "invisible"}  min-h-50 max-h-fit w-11/12 rounded-lg bg-white absolute z-50 top-22 left-1/2 -translate-x-1/2 p-5`}
      >
        <h2 className="font-bold text-xl mb-5">Cart</h2>
        <div className="h-0.5 bg-black/10 w-full "></div>

        {cart == 0 ? (
          <p className="text-center p-10 font-semibold text-gray-700">
            Your cart is empty
          </p>
        ) : (
          <div>
              <div className="flex py-5 gap-5">
                <img src={productImg} className="rounded-lg size-15" alt="" />
                <div>
                    <p className="mb-2 text-gray-600">Fall Limited Edition Sneakers</p>
                    <p className="text-gray-600">$125.00 x {cart} <span className="font-bold">${125*cart}.00</span></p>
                </div>
              </div>
              <button className="bg-orange-500 p-3 w-full font-bold text-lg rounded-lg" onClick={()=>handleCheckout()}>Checkout</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
