import Image from "next/image";
import Stripe from "stripe";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
      {product.images && product.images[0] && (
        <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden ">
          <Image
            alt={product.name}
            src={product.images[0]}
            fill
            className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg object-cover"
          ></Image>
        </div>
      )}
      <div>
        <h1>{product.name}</h1>
        {product.description && <p>{product.description}</p>}
        {price && price.unit_amount && (
          <p className="text-lg font-semibold text-gray-900">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
        <div>
          <Button variant={"outline"}> -</Button>
          <span> 0</span>
          <Button variant={"outline"}> +</Button>
        </div>
      </div>
    </div>
  );
};
