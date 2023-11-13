
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaCircleUser } from 'react-icons/fa6';
import SigninModal from './Modals/SigninModal';
import Modal from 'react-modal';
import OutsideClickHandler from 'react-outside-click-handler';

const UserButton = () => {
    const [dropdown, setDropdown] = useState(false);
    const [showSigninModal, setShowSigninModal] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown)

    };

    const toggleSigninModal = () => {
        setShowSigninModal(!showSigninModal)
        setDropdown(false)
    };

    return (
        <div className=' w-[200px] flex flex-col items-end'>
            <div className='w-20 border-[1.5px] border-black rounded-full py-1 px-2 hover:shadow-md' onClick={toggleDropdown}>
                <div className='flex'>
                    <div className='my-auto mr-2 ml-1'>
                        <FiMenu></FiMenu>
                    </div>
                    <div>
                        <FaCircleUser className='h-[30px] w-[30px] py-auto'></FaCircleUser>
                    </div>
                </div>
            </div>

            {dropdown && (
                <div className='absolute mt-12 border-[1.5px] border-black rounded-md shadow-md'>
                    <OutsideClickHandler onOutsideClick={toggleDropdown}>
                        <div className='py-2 px-12'>
                            <div onClick={toggleSigninModal} className='cursor-pointer hover:underline'>Sign in</div>
                            <div className='cursor-pointer hover:underline'>Sign up</div>
                        </div>
                    </OutsideClickHandler>

                </div>
            )}

            {showSigninModal && (
                <Modal isOpen={showSigninModal} onRequestClose={toggleSigninModal} className="fixed inset-0 flex items-center justify-center">
                    <OutsideClickHandler onOutsideClick={toggleSigninModal}>
                        <SigninModal closeModal={toggleSigninModal} />
                    </OutsideClickHandler>
                </Modal>
            )}
        </div>
    );
};

export default UserButton;


