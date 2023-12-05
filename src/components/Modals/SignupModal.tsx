import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

import FadeIn from "../../components/FadeIn";

interface SigninModalProps {
    closeModal: () => void;
}

const SignupModal: React.FC<SigninModalProps> = ({
    closeModal,
}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await fetch('YOUR_AUTH_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const jwtToken = data.token;
                setToken(jwtToken);
                closeModal(); 
            } else {
                console.error('Authentication failed:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch('YOUR_SECURE_API_ENDPOINT', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
            } else {
                console.error('Secure request failed');
            }
        } catch (error) {
            console.error('Error during secure request:', error);
        }
    };

    return (
        <div className="w-fit">
            <FadeIn delay={0.1} direction="up">
                <div className="flex flex-col  w-[600px] justify-start ">
                    <div
                        className="text-center my-auto w-[550px] rounded-[40px] shadow-lg"
                        style={{
                            boxShadow: '20px 20px 20px rgba(174, 174, 174, 0.5)',
                            background: '#fafafa',
                        }}
                    >
                        <div className='relative text-right font-medium text-xl right-6 top-5 cursor-pointer' onClick={closeModal}>X</div>
                        <div className="text-[54px] text-gray-800">Sign Up</div>
                        <div className="flex justify-center">
                            <div className="flex flex-col w-11/12">
                                <div className="pt-4 ">
                                    <p className="text-left">Username</p>
                                    <input
                                        type="text"
                                        name=""
                                        placeholder="enter your username"
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full rounded-lg bg-gray-200 appearance-none border-2 border-gray-200 py-2 px-4 text-[18px] text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                                    >
                                    </input>
                                </div>
                                <div className="pt-4 ">
                                    <p className="text-left">Email</p>
                                    <input
                                        type="email"
                                        name=""
                                        placeholder="enter your email"
                                        className="w-full rounded-lg bg-gray-200 appearance-none border-2 border-gray-200 py-2 px-4 text-[18px] text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                                    >
                                    </input>
                                </div>
                                <div className="pt-4">
                                    <p className="text-left">Password</p>
                                    <input
                                        type="password"
                                        name=""
                                        placeholder="enter your password"
                                        className="w-full rounded-lg bg-gray-200 appearance-none border-2 border-gray-200 py-2 px-4 text-[18px] text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                                    >
                                    </input>
                                </div>
                                <div className="pt-8 pb-4">
                                    <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-[18px] font-medium" >Sign in to your account</button>
                                </div>
                                <div className="flex pb-4">
                                    <p>Already have an account?</p>
                                    <p className="ml-2 font-medium text-green-600">Sign in here</p>
                                </div>
                                <div className="h-3 border-b-[1px] border-grey-400 text-center">
                                    <span className=" bg-white px-5">or</span>
                                </div>
                                <div className="pt-7">
                                    <button key="google-btn" className="w-full py-2 px-4 rounded-lg text-[18px] font-medium border-[1px] border-black" >
                                        <div className='flex'>
                                            <div>
                                                <FcGoogle className='w-[25px] h-[25px]'></FcGoogle>
                                            </div>
                                            <div className='mx-auto'>
                                                Sign up with Google
                                            </div>
                                        </div>
                                    </button>
                                    <div className="pt-4 pb-7">
                                        <button key="apple-btn" className="w-full py-2 px-4 rounded-lg text-[18px] font-medium border-[1px] border-black" >
                                            <div className='flex'>
                                                <div>
                                                    <BsApple className='w-[25px] h-[25px]'></BsApple>
                                                </div>
                                                <div className='mx-auto'>
                                                    Sign up with Facebook
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default SignupModal;