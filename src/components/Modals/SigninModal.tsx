import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import SignupModal from "./SignupModal";

import FadeIn from "../../components/FadeIn";

interface SigninModalProps {
    closeModal: () => void;
}

const SigninModal: React.FC<SigninModalProps> = ({
    closeModal,
}) => {
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    return (
        <div className="w-fit">
            <FadeIn delay={0.1} direction="up">
                {showSignUpModal ? (
                    <SignupModal closeModal={closeModal} />
                ) : (
                    <div className="flex flex-col w-[600px] justify-start">
                        <div
                            className="text-center my-auto w-[350px] md:w-[550px] rounded-[40px] shadow-lg mx-auto"
                            style={{
                                boxShadow: '20px 20px 20px rgba(174, 174, 174, 0.5)',
                                background: '#fafafa',
                            }}
                        >
                            <div className='relative text-right font-medium text-xl right-6 top-5 cursor-pointer' onClick={closeModal}>X</div>
                            <div className="text-[54px] text-gray-800">Sign In</div>
                            <div className="flex justify-center">
                                <div className="flex flex-col w-11/12">
                                    <div className="pt-4">
                                        <p className="text-left">Email</p>
                                        <input
                                            type="email"
                                            name=""
                                            placeholder="enter your email"
                                            className="w-full rounded-lg bg-gray-200 appearance-none border-2 border-gray-200 py-2 px-4 text-[18px] text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                                        />
                                    </div>
                                    <div className="pt-4">
                                        <p className="text-left">Password</p>
                                        <input
                                            type="password"
                                            name=""
                                            placeholder="enter your password"
                                            className="w-full rounded-lg bg-gray-200 appearance-none border-2 border-gray-200 py-2 px-4 text-[18px] text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                                        />
                                    </div>
                                    <div className="pt-4 flex justify-between">
                                        <div className="flex">
                                            <input type="checkbox" value="" className="w-4 h-4 mt-1" />
                                            <p className="ml-1">Remember me</p>
                                        </div>
                                        <div>
                                            <p>Forgot password?</p>
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-[18px] font-medium">Sign in to your account</button>
                                    </div>
                                    <div className="flex pb-4">
                                        <p>Don't have an account yet? </p>
                                        <p
                                            className="ml-2 font-medium text-green-600 cursor-pointer"
                                            onClick={() => {
                                                setShowSignUpModal(true);
                                            }}
                                        >
                                            Sign up here
                                        </p>
                                    </div>
                                    <div className="h-3 border-b-[1px] border-grey-400 text-center">
                                        <span className=" bg-white px-5">or</span>
                                    </div>
                                    <div className="pt-7">
                                        <button className="w-full py-2 px-4 rounded-lg text-[18px] font-medium border-[1px] border-black" >
                                            <div className='flex'>
                                                <div>
                                                    <FcGoogle className='w-[25px] h-[25px]' />
                                                </div>
                                                <div className='mx-auto'>
                                                    Sign in with Google
                                                </div>
                                            </div>
                                        </button>
                                        <div className="pt-4 pb-7">
                                            <button className="w-full py-2 px-4 rounded-lg text-[18px] font-medium border-[1px] border-black" >
                                                <div className='flex'>
                                                    <div>
                                                        <BsApple className='w-[25px] h-[25px]' />
                                                    </div>
                                                    <div className='mx-auto'>
                                                        Sign in with Facebook
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </FadeIn>
        </div>
    );
}

export default SigninModal;
