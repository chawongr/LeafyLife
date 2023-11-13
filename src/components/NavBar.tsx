import { useState } from "react";

import NavLink from "../../src/components/NavLink";

import logo from "../../src/assets/Leafy.svg"
import cartIcon from "../../src/assets/cart-icon.svg";

import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserButton from "./UserButton";

const Hero = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
  
        <div className="relative w-full max-w-[1490px] flex items-center justify-between pt-7 mx-auto px-10">
            <img src={logo} alt="" />
            <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
                <NavLink to="services">Services</NavLink>
                <NavLink to="products">Shop</NavLink>
                <NavLink to="reference">Reference</NavLink>
                <NavLink to="care">Care</NavLink>
            </ul>
            {/* <img src={cartIcon} className="hidden md:block cursor-pointer" alt="" /> */}
            <UserButton/>

            <HiMenuAlt3
                size={30}
                className="block md:hidden cursor-pointer text-black"
                onClick={() => setShowMobileMenu((prev) => !prev)}
            />
            <div
                className={`block md:hidden w-full fixed ${!showMobileMenu ? "-top-[410px]" : "top-0"
                    } left-0 bg-[#dde0e5] h-[410] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
            >
                <AiOutlineClose
                    size={25}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={() => setShowMobileMenu(false)}
                />

                <ul className="pt-[60px] items-center flex flex-col gap-8">
                    <NavLink to="services" mobileMenu>Services</NavLink>
                    <NavLink to="products" mobileMenu>Shop</NavLink>
                    <NavLink to="reference" mobileMenu>Reference</NavLink>
                    <NavLink to="care" mobileMenu>Care</NavLink>
                </ul>

                <img src={cartIcon} className="mt-8 mx-auto cursor-pointer" alt="" />
            </div>
        </div>

    );
};

export default Hero;



