import type { Product } from "../types";

interface ProductInfoProps {
  product: Product;  
}

const ProductInfo = ({product}: ProductInfoProps) => {

  return (
    <div className="flex flex-col gap-4">
      <h2>{product.name}</h2>      
      <h4>{product.description}</h4>
    </div>
  )
}

export default ProductInfo