import ProductImage from "./productDetail/Image";
import ProductInfo from "./productDetail/Info";
import ProductOrder from "./productDetail/Order";
import type { Product } from "./types";

interface ProductDetailProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductDetail = ({product}: ProductDetailProps) => {
  return (
    <div>
      {/*        
      Related Products -- pick a few products in the same category.
      */}

      {/* breadcrumbs */}
      <nav>
        Home &gt; {product.category} &gt; {product.name}
      </nav>
      
      <ProductImage src={product.src} alt={product.alt} />
      <ProductInfo name={product.name} price={product.price} />
      <ProductOrder product={product} onAddToCart={() => {}} />

    </div>
  )
}

export default ProductDetail