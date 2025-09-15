import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsTableData } from "./api/useProducts";
import ProductImage from "./productDetail/Image";
import ProductInfo from "./productDetail/Info";
import ProductOrder from "./productDetail/Order";
import type { Product } from "./types";


const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const {
    products
  } = useProductsTableData();
  const [product, setProduct] = useState<Product|undefined>(undefined);

  useEffect(() => {
    const selected = products.find(p => p.id === id);
    setProduct(selected)
  }, [])  

  if (!product) {
    return <div>Loading...</div>
  }    
  
  return (
    <div className="page-container">
      {/*
      Related Products -- pick a few products in the same category.
      */}

      {/* breadcrumbs */}
      <nav>
        Home &gt; {product.category} &gt; {product.name}
      </nav>
      
      <div className="flex flex-col lg:flex-row justify-between">
        <ProductImage src={product.src} alt={product.alt} />
        <div className="flex flex-col gap-8 lg:w-1/3 xl:w-1/2">
          <ProductInfo product={product} />
          <ProductOrder product={product} onAddToCart={() => {}} />
        </div>
      </div>

    </div>
  )
}

export default ProductDetail