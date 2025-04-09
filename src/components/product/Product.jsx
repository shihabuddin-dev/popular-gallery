import React, { useState } from 'react';
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";


const Product = ({ product, handleProductsAddToCart, handlePriceCount }) => {
    const { image, title, currentBidPrice, timeLeft } = product

    const [color, setColor] = useState(false)
    const handleChangeColor = () => {
        setColor(true)
        handleProductsAddToCart(product)
        handlePriceCount(currentBidPrice)
    }
    return (
        <>
            <tbody className='border-b-1 border-[#DCE5F3] hover:bg-gray-50'>
                <tr className='text-lg font-medium'>
                    <td className='flex gap-4 items-center py-4 px-4'>
                        <img className='w-24 h-24 object-cover rounded-lg' src={image} alt="" />
                        <span className='py-4 px-4'>{title}</span>
                    </td>
                    <td className='py-4 px-4'> ${currentBidPrice}</td>
                    <td> {timeLeft}</td>
                    <td>
                        <button disabled={color ? true : false}
                            onClick={handleChangeColor}
                            className='text-2xl pl-8 py-4 px-4 '>
                            {color ? <IoMdHeart className='text-red-600 cursor-not-allowed' /> : <IoIosHeartEmpty className='cursor-pointer' />}
                        </button>
                    </td>
                </tr>

            </tbody>

        </>
    );
};

export default Product;