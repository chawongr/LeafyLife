import { useState } from "react";

import FadeIn from "../components/FadeIn";

import cactus from "../../src/assets/cactus.png"

import { heroTitle, heroSubtitle } from "../data";

import NavBar from "../components/NavBar"

import { BiRightArrowAlt } from "react-icons/bi"
import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <div className=" relative flex flex-col items-center bg-gradient-to-b from-green-200 via-green-50 to-slate-0 ">
            <NavBar />
            <div className="flex flex-col lg:flex-row gap-8 mt-[80px] w-full max-w-[1490px] justify-around ">
                <FadeIn delay={0.4} direction="right">
                    <div className="flex flex-col xs:flex-row gap-6 xs:items-start">
                        <div className="text-center my-auto ">
                            <h1 className="text-center m-2 lg:m-0 lg:text-start text-3xl leading-tight xs:text-[72px] font-bold xs:font-semibold text-black max-w-[510px]">
                                {heroTitle}
                            </h1>
                            <h6 className=" lg:m-0 mt-6 text-center mx-auto lg:text-start text-base xs:text-xl text-fontGray lg:max-w-[600px] max-w-[300px] ">
                                {heroSubtitle}
                            </h6>
                            <div className="flex justify-center lg:justify-start mt-9 ">
                                <Link to="/login">
                                    <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 xs:text-xl font-semibold rounded-lg ">
                                        Join Now
                                    </button>
                                </Link>
                                <div className="flex py-3 px-6 xs:text-xl ">
                                    <p className="text-neutral-600">
                                        See how its work
                                    </p>
                                    <div className="py-1 px-2">
                                        <BiRightArrowAlt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={0.6} direction="left">
                    <img src={cactus} alt="cactus" className="mt-4 lg:mt-0 max-w-[300px] lg:max-w-[500px]" />
                </FadeIn>
            </div>
        </div>
    );
};

export default Hero;



