import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import type { Product } from '../type/index';

const Home = () => {
    const [products,setProducts] = useState<Product[]>([]);
useEffect(()=> {
    const fetchProducts = async () => {
        try{
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json();
            setProducts(data.products);
        }
        catch(err) {
            console.error("Failed to fetch products:", err);    
        }
    }
    fetchProducts();
},[])
  return (
    <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Home
