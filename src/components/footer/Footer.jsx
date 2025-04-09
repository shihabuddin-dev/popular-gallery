import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto px-2 text-center py-12 md:py-16 flex justify-center items-center flex-col space-y-2 cursor-pointer'>
            <h2 className="text-3xl text-blue-700">Auction<span className='font-bold text-[#FCD141]'>Gallery</span> </h2>
            <ul className='flex gap-4 items-center text-xl md:text-[22px]'>
                <li className='hover:text-blue-700'>Bid.</li>
                <li className='hover:text-blue-700'>Win.</li>
                <li className='hover:text-blue-700'>Won.</li>
            </ul>
            <ul className='flex flex-wrap gap-3 md:gap-6 items-center justify-center text-lg'>
                <li className='hover:text-blue-700'>Home</li>
                <li className='hover:text-blue-700'>Auctions</li>
                <li className='hover:text-blue-700'>Categories</li>
                <li className='hover:text-blue-700'>How to works</li>
            </ul>
            <p className='hover:text-blue-700'>© 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;