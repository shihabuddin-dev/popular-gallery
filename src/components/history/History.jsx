import React from 'react';
import { RxCross2 } from "react-icons/rx";

const History = ({ cartProduct, handleRemoveProduct }) => {
    const { image, currentBidPrice, bidsCount, title } = cartProduct;
    return (
        <div className='container mx-auto px-2 '>

            <div className='flex items-center  py-4 px-4 border-b-1 border-[#DCE5F3]'>
                <div>
                    <img className='w-16 h-16 object-cover rounded-lg' src={image} alt="" />
                </div>
                <div className='flex flex-col gap-1 flex-1 pl-4'>
                    <p>{title}</p>
                    <div className='flex gap-6'>
                        <p>${currentBidPrice}</p>
                        <p>Bids: {bidsCount}</p>
                    </div>
                </div>
                <button
                    onClick={() => handleRemoveProduct(cartProduct.id, currentBidPrice)}
                    className='text-xl font-bold hover:text-red-600 cursor-pointer hover:bg-red-100 rounded-full p-1 text-right'> <RxCross2 className='active:animate-ping' /></button>
            </div>
        </div>
    );
};

export default History;