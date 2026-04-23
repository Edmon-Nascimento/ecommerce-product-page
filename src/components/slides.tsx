import arrowNextIcon from "../assets/images/icon-next.svg"
import arrowPreviousIcon from "../assets/images/icon-previous.svg"
import Image1 from "../assets/images/image-product-1.jpg"
import image2 from "../assets/images/image-product-2.jpg"
import image3 from "../assets/images/image-product-3.jpg"
import image4 from "../assets/images/image-product-4.jpg"
import { useState } from "react"

function Slides(){
    const images = [Image1, image2, image3, image4]
    const [imageIndex, setImageIndex] = useState(0)


    return(
        <section className="w-screen relative select-none">
            <img src={images[imageIndex]} className="w-full" />
            
            <div className="flex justify-between w-full px-3 absolute top-1/2 -translate-y-1/2">
                <button className={`${imageIndex==0? "pointer-events-none opacity-70":"cursor-pointer"}`} onClick={()=> setImageIndex(index => index-1)}>
                    <div className="bg-white size-12 rounded-full">
                        <img className="absolute top-1/2 -translate-y-1/2 left-7" src={arrowPreviousIcon} alt="" />
                    </div>
                </button>
                <button className={`${imageIndex === images.length-1? "pointer-events-none opacity-70":"cursor-pointer"}`}  onClick={()=> setImageIndex(index => index+1)}>
                    <div className="bg-white size-12 rounded-full">
                        <img className="absolute top-1/2 -translate-y-1/2 right-7" src={arrowNextIcon} alt="" />
                    </div>
                </button>
            </div>
        </section>
        
    )
}

export default Slides