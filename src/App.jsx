import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'

function App() {
  const [products, SetProducts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const fetchProducts = async () => {
      const res = await fetch("products.json")
      const result = await res.json()
      SetProducts(result)
    }
    fetchProducts()
    setLoading(false)
  }, [])
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      {
        !loading && <Products products={products}></Products>
      }
      <Footer></Footer>
    </>
  )
}

export default App
