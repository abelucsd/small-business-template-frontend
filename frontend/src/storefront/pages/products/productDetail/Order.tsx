import { useCartContext } from "../../cart/CartProvider";
import type { Product } from "../types";

interface ProductOrderProps {
  product: Product;
  styles?: string;
}

const ProductOrder = ({product, styles}: ProductOrderProps) => {  
  const {addItem} = useCartContext();
  return (
    <div>
      <button
        onClick={() => addItem(product, 1)}
        className={`${styles} bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700`}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductOrder