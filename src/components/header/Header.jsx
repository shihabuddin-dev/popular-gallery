import React from 'react';

const Header = () => {
    return (
        <div className=' banner'>
            <div className='container mx-auto px-2'>
                <div className='space-y-4 md:space-y-6 md:w-6/12 py-36 items-center text-center sm:text-justify '>
                    <h1 className='text-white text-3xl md:text-5xl font-semibold md:leading-14'>Bid on Unique Items from Around the World</h1>
                    <p className='text-xl md:text-2xl font-light text-gray-200'>Discover rare collectibles, luxury goods, and vintage treasures in our curated Popular.</p>
                    <button className='btn bg-white  hover:bg-blue-600 hover:text-white border-none rounded-full text-lg md:text-xl font-medium'>Explore Gallery</button>
                </div>
            </div>
        </div>
    );
};

export default Header;