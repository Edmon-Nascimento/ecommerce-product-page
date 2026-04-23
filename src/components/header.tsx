import { useState } from "react"
import menuIcon from "../assets/images/icon-menu.svg"
import closeMenuIcon from "../assets/images/icon-close.svg"
import cartIcon from "../assets/images/icon-cart.svg"
import userImg from "../assets/images/image-avatar.png"

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <header className="py-8 px-5">
            <section className="flex justify-between w-full items-center">
                <div className="flex items-center gap-5">
                    <button className="cursor-pointer z-50" onClick={()=>setIsMenuOpen(prev => !prev)}>
                        <img className="size-5 z-50" src={isMenuOpen? closeMenuIcon:menuIcon} alt="" />
                    </button>
                    <h1 className="text-4xl font-bold">sneakers</h1>
                </div>

                <div className="flex items-center gap-5">
                    <img className="size-8" src={cartIcon} alt="" />
                    <img className="size-10" src={userImg} alt=""/>
                </div>
            </section>

            <div className={`${isMenuOpen? "visble":"invisible"} fixed top-0 left-0 w-screen h-screen bg-black/50 z-40`} onClick={()=>setIsMenuOpen(prev => !prev)}>

            </div>

            <article className={`${isMenuOpen? "visible":"invisible"}
                fixed top-0 left-0 w-50 h-screen bg-white z-40
                `}>

                    <div className="flex flex-col pt-30 pl-8 gap-5">
                        <a href="#" className="text-lg font-black">Collections</a>
                        <a href="#" className="text-lg font-black">Men</a>
                        <a href="#" className="text-lg font-black">Women</a>
                        <a href="#" className="text-lg font-black">About</a>
                        <a href="#" className="text-lg font-black">Contact</a>
                    </div>
            </article>
            
        </header>
    )
}

export default Header