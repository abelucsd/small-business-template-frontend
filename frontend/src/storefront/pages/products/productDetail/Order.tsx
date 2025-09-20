import { useState } from "react";
import { useCartContext } from "../../cart/CartProvider";
import type { Product } from "../types";
import QuantityDropdown from "./QuantityDropdown";

interface ProductOrderProps {
  product: Product;
  styles?: string;
}

const ProductOrder = ({product, styles}: ProductOrderProps) => {  
  const {addItem} = useCartContext();
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="flex flex-col gap-6">
      <h3>In Stock</h3>
      <div><h3>${product.price}</h3></div>
      <div className="w-full">
        <QuantityDropdown quantity={quantity} handleQuantityChange={handleQuantityChange} />       
      </div>
      <button
        onClick={() => addItem(product, 1)}
        className={`${styles} bg-blue-600 text-white w-full px-4 py-2 rounded hover:bg-blue-700`}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductOrder