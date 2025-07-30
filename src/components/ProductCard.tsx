import React from "react";
import type { FC } from "react";
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
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}
const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardContent>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-40 h-40 rounded  object-cover"
            />
          </CardContent>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription className="text-start text-gray-600 truncate">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          ${product.price}
          <CardAction className="text-blue-700 hover:text-blue-400">
           <Link to={`/product/${product.id}`}>view</Link> 
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
