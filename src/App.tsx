import Header from "./components/header"
import Slides from "./components/slides"
import plusIcon from "./assets/images/icon-plus.svg"
import minusIcon from "./assets/images/icon-minus.svg"
import cartIcon from "./assets/images/icon-cart.svg"
import { useState } from "react"

function App() {
  const [quantity, setQuantity] = useState(0)
  const [cartQuantity, setCartQuantity] = useState(0)

  function handleAddProduct(){
    if (quantity > 0){
      setCartQuantity(prev => prev + quantity)
      setQuantity(0)
    }else{
      alert("Please select a quantity before adding to cart")
    }
  }

  function handleDelete(){
    setCartQuantity(0)
  }

  return (
    <>
      <Header cart={cartQuantity} onDeleteCart={handleDelete}/>
      <Slides />
      <main className="px-5 py-8">
        <p className="font-semibold text-[12px] tracking-widest text-gray-600">SNEAKER COMPANY</p>
        <h2 className="font-bold text-3xl my-3">Fall Limited Edition Sneakers</h2>
        <p className="font-light leading-7 my-5 text-gray-600">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

        <div className="flex justify-between items-center mt-7">
          <div className="flex gap-5 items-center">
            <p className="font-bold text-3xl">$125.00</p>
            <p className="font-bold bg-black text-white py-0.5 px-2 rounded-lg">50%</p>
          </div>
          <p className="line-through font-medium text-gray-500">$250.00</p>
        </div>

        <div className="flex items-center justify-between p-3 mt-5 bg-gray-100">
           <button onClick={()=>setQuantity(prev => prev-1)} className={`${quantity == 0? "opacity-50 pointer-events-none":""}`}>
            <img src={minusIcon} />
          </button>
          

          <p className="font-bold">{quantity}</p>

         <button onClick={()=>setQuantity(prev => prev+1)} >
            <img src={plusIcon} />
          </button>
        </div>

        <button className="flex w-full items-center justify-center p-3 gap-3 bg-orange-500 rounded-lg mt-5 font-bold" onClick={()=>handleAddProduct()}>
          <img src={cartIcon} alt="" />
          Add to Cart
        </button>
      </main>
    </>
  )
}

export default App
