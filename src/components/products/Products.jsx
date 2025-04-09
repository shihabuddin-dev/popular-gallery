
import Product from "../product/Product";
import History from "../history/History";
import { useState } from "react";
import { IoMdHeartEmpty, IoMdHeartHalf } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';

const Products = ({ products }) => {
    const [addCart, setAddCart] = useState([])
    const [priceCount, setPriceCount] = useState(0)
    const handleProductsAddToCart = (product) => {
        setAddCart([...addCart, product])
        toast.success('Added To Favorite', { position: 'top-center', autoClose: 1100, theme: 'colored' })
        {
            addCart.length >= 6 && toast('Added All items to favorite', { position: 'top-center', autoClose: 2000 })
        }
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
        toast.warn('Deleted From Favorite', { position: 'top-center', autoClose: 1100, theme: 'colored' })
        handlePriceDec(currentBidPrice)

    }
    return (
        <div className='bg-[#EBF0F5]'>
            <div className="container mx-auto px-2 py-12 md:py-16">
                <h2 className='text-3xl md:text-[32px] pb-2 text-[#0E2954] font-medium'>Active Gallery</h2>
                <p className="md:text-xl">Discover and bid on extraordinary items</p>
                <div className='flex flex-col lg:flex-row gap-4 mt-6'>
                    <div className="lg:w-[70%] bg-white rounded-xl overflow-x-auto">
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
                    <div className="lg:w-[30%] bg-white rounded-xl ">

                        <p className='text-3xl text-[#0E2954]  flex gap-4 items-center justify-center cursor-pointer py-6 px-4 border-b-1 border-[#DCE5F3]'>
                            {
                                addCart.length < 1 && (<span className="active:animate-spin"><IoMdHeartEmpty />  </span>)
                            }
                            {
                                addCart.length >= 1 && addCart.length <= 6 && (<span className="text-blue-600 active:animate-spin">  <IoMdHeartHalf /> </span>)
                            }
                            {
                                addCart.length >= 7 && (
                                    <span className="text-red-600 active:animate-ping">
                                        <IoHeart /></span>)
                            }


                            Favorite Items</p>
                        {
                            addCart.map(cartProduct =>
                                <History
                                    key={cartProduct.id}
                                    cartProduct={cartProduct}
                                    handleRemoveProduct={handleRemoveProduct}

                                ></History>)
                        }
                        {!priceCount && (
                            <div className="py-6 px-2 md:px-18 space-y-2 border-y-1 border-[#DCE5F3] text-center ">
                                <h2 className="text-2xl font-medium">No Favorites Yet</h2>
                                <p className="font-medium text-gray-900">Click the heart icon on any item to add it to your favorites</p>
                            </div>
                        )
                        }
                        <div className="flex justify-around text-2xl md:text-[26px] my-4 px-2">
                            <h2 className="font-medium">Total bids Amount</h2>
                            <p className="font-semibold">${priceCount}</p>
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Products;