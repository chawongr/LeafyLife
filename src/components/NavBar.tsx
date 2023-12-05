import { useState } from "react";

import NavLink from "../../src/components/NavLink";

import logo from "../../src/assets/Leafy.svg"
import cartIcon from "../../src/assets/cart-icon.svg";

import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserButton from "./UserButton";

import SigninModal from './Modals/SigninModal';
import SignupModal from './Modals/SignupModal';
import Modal from 'react-modal';
import OutsideClickHandler from 'react-outside-click-handler';

const Hero = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSigninModal, setShowSigninModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const toggleSigninModal = () => {
        setShowSigninModal(!showSigninModal)
        setShowMobileMenu(false)
    };

    const toggleSignupModal = () => {
        setShowSignupModal(!showSignupModal)
        setShowMobileMenu(false)
    };

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }

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
            <UserButton />

            <HiMenuAlt3
                size={30}
                className="block md:hidden cursor-pointer text-black"
                onClick={() => setShowMobileMenu((prev) => !prev)}
            />
            {/* <OutsideClickHandler onOutsideClick={toggleMobileMenu}>

            </OutsideClickHandler> */}
                <div
                    className={`block md:hidden w-screen fixed ${!showMobileMenu ? "-top-[510px]" : "top-0"
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
                        <NavLink onClick={toggleSigninModal} mobileMenu className='cursor-pointer hover:underline'>Sign in</NavLink>
                        <NavLink onClick={toggleSignupModal} mobileMenu className='cursor-pointer hover:underline'>Sign up</NavLink>
                    </ul>

                    {/* <img src={cartIcon} className="mt-8 mx-auto cursor-pointer" alt="" /> */}
                </div>
            {showSigninModal && (
                <Modal isOpen={showSigninModal} onRequestClose={toggleSigninModal} className="fixed inset-0 flex items-center justify-center">
                    <OutsideClickHandler onOutsideClick={toggleSigninModal}>
                        <SigninModal closeModal={toggleSigninModal} />
                    </OutsideClickHandler>
                </Modal>
            )}
            {showSignupModal && (
                <Modal isOpen={showSignupModal} onRequestClose={toggleSignupModal} className="fixed inset-0 flex items-center justify-center">
                    <OutsideClickHandler onOutsideClick={toggleSignupModal}>
                        <SignupModal closeModal={toggleSignupModal} />
                    </OutsideClickHandler>
                </Modal>
            )}
        </div>

    );
};

export default Hero;



