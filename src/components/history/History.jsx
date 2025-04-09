import React from 'react';
import { RxCross2 } from "react-icons/rx";

const History = ({ cartProduct, handleRemoveProduct }) => {
    const { image, currentBidPrice, bidsCount, title } = cartProduct;
    return (
        <div className='container mx-auto px-2 text-center'>

            <div className='flex items-center gap-2 py-4 px-4 border-b-1 border-[#DCE5F3]'>
                <div>
                    <img className='w-16 h-16 object-cover rounded-lg' src={image} alt="" />
                </div>
                <div className='flex flex-col flex-1'>
                    <p>{title}</p>
                    <div className='pl-2 flex gap-4'>
                        <p>${currentBidPrice}</p>
                        <p>Bids: {bidsCount}</p>
                    </div>
                </div>
                <div
                    onClick={() => handleRemoveProduct(cartProduct.id,currentBidPrice)}
                    className='text-xl font-bold hover:text-red-600 cursor-pointer hover:bg-red-100 rounded-full p-1 text-right'><RxCross2 /></div>
            </div>
        </div>
    );
};

export default History;