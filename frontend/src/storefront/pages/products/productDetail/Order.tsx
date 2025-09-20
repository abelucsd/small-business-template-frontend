import { useState } from "react";
import { useCartContext } from "../../cart/CartProvider";
import type { Product } from "../types";
import QuantityDropdown from "./QuantityDropdown";
import CustomModal from "../../../shared/components/Modal";


interface ProductOrderProps {
  product: Product;
  styles?: string;
}


const ProductOrder = ({product, styles}: ProductOrderProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {addItem} = useCartContext();
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleModalResult = (result: boolean) => {
    if (result) {
      addItem(product, quantity);
    }
    setIsModalOpen(false);
  }

  return (
    <div className="flex flex-col gap-6">

      <h3>In Stock</h3>

      <div><h3>${product.price}</h3></div>

      <div className="w-full">
        <QuantityDropdown quantity={quantity} handleQuantityChange={handleQuantityChange} />       
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className={`${styles} bg-blue-600 text-white w-full px-4 py-2 rounded hover:bg-blue-700`}
      >
        Add to Cart
      </button>


      { isModalOpen && 
        <CustomModal header={`Adding ${quantity} item(s) into the cart?`} onResult={handleModalResult} />      
      }      

    </div>
  )
}

export default ProductOrder