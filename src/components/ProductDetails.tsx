import React, { use, useEffect } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import type { Product } from "../type";
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = React.useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                console.error("Failed to fetch product:", err);
            }
        };
        fetchProduct();
    }, [id]);
    
  return (
    <div className='p-6 max-w-3xl mx-auto  border-2 shadow-lg border-gray-200 rounded-xl '>
      {product ? (
        <Card className='border-none shadow-none'>
          <CardHeader>
            <CardContent>
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-100 h-100 rounded object-cover justify-center mx-auto border-2 shadow-lg border-gray-200 rounded-lg mb-4"
              />
            </CardContent>
            <CardTitle className='font-bold text-2xl '>{product.title}</CardTitle>
            <CardDescription className="text-start text-gray-600 ">
              {product.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between font-bold">
            ${product.price}
          </CardFooter>
        </Card>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default ProductDetails
