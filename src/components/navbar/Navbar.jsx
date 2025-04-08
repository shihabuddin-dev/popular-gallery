import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='container mx-auto cursor-pointer py-2 px-2'>
            <div className="navbar bg-base-100 flex justify-between items-center">
                <div className="">
                    <a className="text-2xl md:text-3xl text-blue-700">Auction<span className='font-bold text-[#FCD141]'>Gallery</span> </a>
                </div>
                <ul className='hidden md:flex gap-6 items-center text-xl'>
                    <li className='hover:text-blue-700'>Home</li>
                    <li className='hover:text-blue-700'>Auctions</li>
                    <li className='hover:text-blue-700'>Categories</li>
                    <li className='hover:text-blue-700'>How to works</li>
                </ul>
                <div className="flex-none">
                    <div className="dropdown dropdown-end bg-[#EBF0F5] rounded-full">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <p className='text-2xl'> <IoNotificationsOutline /></p>
                                <span className="badge badge-sm indicator-item bg-[#0E2954] rounded-full text-white">7</span>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end ml-4">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://i.ibb.co.com/svJ5v3XH/shihab-img.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;