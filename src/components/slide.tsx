import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";
import iconNext from "../assets/images/icon-next.svg";
import iconPrev from "../assets/images/icon-previous.svg";
import iconClose from "../assets/images/icon-close.svg";
import thumbImage1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbImage2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbImage3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbImage4 from "../assets/images/image-product-4-thumbnail.jpg";
import { useState } from "react";

function Slide() {
  const images = [image1, image2, image3, image4];
  const thumbImages = [thumbImage1, thumbImage2, thumbImage3, thumbImage4];
  const [imageIndex, setImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-screen lg:max-w-lg min-h-full rounded-lg relative">
      <img
        src={isModalOpen ? image1 : images[imageIndex]}
        alt="Product image"
        className="lg:rounded-lg"
        onClick={() => setIsModalOpen(true)}
      />
      <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 lg:hidden">
        <button
          className={`${imageIndex === 0 ? "pointer-events-none opacity-70" : "cursor-pointer"} size-12 rounded-full bg-white flex items-center justify-center ml-5`}
          onClick={() => setImageIndex((index) => index - 1)}
        >
          <img src={iconPrev} />
        </button>
        <button
          className={`${imageIndex === images.length - 1 ? "pointer-events-none opacity-70" : "cursor-pointer"} size-12 rounded-full bg-white flex items-center justify-center mr-5`}
          onClick={() => setImageIndex((index) => index + 1)}
        >
          <img src={iconNext} />
        </button>
      </div>

      <div className="hidden lg:flex lg:mt-5 gap-5 justify-start">
        {thumbImages.map((item, index) => (
          <div key={index} className="">
            <img
              src={item}
              className={`${imageIndex === index ? "opacity-70 ring-3 ring-orange-500" : ""} rounded-lg cursor-pointer`}
              onClick={() => setImageIndex(index)}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <section className="hidden w-screen h-screen fixed z-80 top-0 left-0 lg:flex items-center justify-center">
          <div className="flex flex-col fixed z-70 ">
            <button
              className=" z-90 absolute -top-8 right-2 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <img className="w-5 " src={iconClose} alt="" />
            </button>
            <img
              src={images[imageIndex]}
              className="w-full lg:max-w-xl lg:rounded-xl lg:cursor-pointer"
            />

            <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2">
              <button
                className={`${imageIndex == 0 ? "pointer-events-none opacity-70" : "cursor-pointer"}`}
                onClick={() => setImageIndex((index) => index - 1)}
              >
                <div className="bg-white size-12 rounded-full">
                  <img
                    className="absolute top-1/2 -translate-y-1/2 left-4"
                    src={iconPrev}
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
                    className="absolute top-1/2 -translate-y-1/2 right-4"
                    src={iconNext}
                    alt=""
                  />
                </div>
              </button>
            </div>
            <div className="hidden lg:flex lg:mt-5 gap-5 items-center justify-center">
              {thumbImages.map((item, index) => (
                <div key={index} className="">
                  <img
                    src={item}
                    className={`${imageIndex === index ? "ring-3 ring-orange-500" : ""} rounded-lg cursor-pointer w-32`}
                    onClick={() => setImageIndex(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className="hidden lg:block fixed w-screen h-screen top-0 left-0 bg-black/80 z-60"
            onClick={() => setIsModalOpen(false)}
          ></div>
        </section>
      )}
    </div>
  );
}

export default Slide;
