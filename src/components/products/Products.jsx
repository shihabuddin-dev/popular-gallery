
import Product from "../product/Product";
import History from "../history/History";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';

const Products = ({ products }) => {
    const [addCart, setAddCart] = useState([])
    const [priceCount, setPriceCount] = useState(0)
    const handleProductsAddToCart = (product) => {
        setAddCart([...addCart, product])
        toast.success('Added To Favorite', { position: 'top-center', autoClose: 1500, theme: 'colored' })
    }

    const handlePriceCount = (currentBidPrice) => {
        setPriceCount(priceCount => priceCount + currentBidPrice)
    }
    const handlePriceDec = (currentBidPrice) => {
        setPriceCount(priceCount - currentBidPrice)
    }

    const handleRemoveProduct = (id, currentBidPrice) => {
        const remainCart = addCart.filter(cart => cart.id !== id)
        setAddCart(remainCart)
        toast.warn('Deleted From Favorite', { position: 'top-center', autoClose: 1500, theme: 'colored' })
        handlePriceDec(currentBidPrice)
    }
    return (
        <div className='bg-[#EBF0F5]'>
            <div className="container mx-auto px-2 py-12 md:py-16">
                <h2 className='text-3xl md:text-[32px] text-[#0E2954] font-medium'>Active Auctions</h2>
                <p className="md:text-xl">Discover and bid on extraordinary items</p>
                <div className='flex flex-col md:flex-row gap-4 mt-6'>
                    <div className="md:w-[70%] bg-white rounded-xl overflow-x-auto">
                        <table className="w-full shadow">
                            <thead className="border-b-1 border-[#DCE5F3] text-xl font-normal hover:bg-gray-50">
                                <tr className="text-left">
                                    <th className="py-6 px-4">Items</th>
                                    <th className="py-6 px-4">Current Bid</th>
                                    <th className="py-6 px-4">Time Left</th>
                                    <th className="py-6 px-4">Bid Now</th>
                                </tr>
                            </thead>
                            {
                                products.map(product =>
                                    <Product
                                        key={product.id}
                                        product={product}
                                        handleProductsAddToCart={handleProductsAddToCart}
                                        handlePriceCount={handlePriceCount}
                                    ></Product>)
                            }
                        </table>
                    </div>
                    <div className="md:w-[30%] bg-white rounded-xl ">
                        <p className='text-3xl flex gap-4 items-center justify-center cursor-pointer py-6 px-4 border-b-1 border-[#DCE5F3]'> <FiHeart /> Favorite Items</p>
                        {
                            addCart.map(cartProduct =>
                                <History
                                    key={cartProduct.id}
                                    cartProduct={cartProduct}
                                    handleRemoveProduct={handleRemoveProduct}

                                ></History>)
                        }
                        <div className="flex justify-around text-[26px] mt-4">
                            <h2 className="font-medium">Total bids Amount</h2>
                            <p className="font-semibold">$ {priceCount}</p>
                        </div>

                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Products;