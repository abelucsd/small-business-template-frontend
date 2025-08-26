import type { Product } from "../types";

interface ProductOrderProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  styles?: string;
}

const ProductOrder = ({product, onAddToCart, styles}: ProductOrderProps) => {
  return (
    <div>
      <button
        onClick={() => onAddToCart?.(product)}
        className={`${styles} bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700`}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductOrder