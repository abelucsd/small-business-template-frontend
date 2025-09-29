import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductImage from "./productDetail/Image";
import ProductInfo from "./productDetail/Info";
import ProductOrder from "./productDetail/Order";
import type { Product } from "./types";
import { getProductById } from "./api/productsAPI";


const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product|undefined>(undefined);

  const handleBreadcrumbClick = () => {
    navigate(`/Products?search=${product?.categoryId._id}`);
  }


  useEffect(() => {
    const getProduct = async (id: string) => {
      try {
        const product = await getProductById(id);
        setProduct(product);
        return product;
      } catch (error) {
        console.error(`Error in fetching product ${id}`);        
      }
    }

    if (id) {
      getProduct(id);      
    }

  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }    
  
  return (
    <div className="page-container lg:px-4 xl:px-0">
      {/*
      Related Products -- pick a few products in the same category.
      */}

      {/* breadcrumbs */}
      <nav>
        <Link to={`/Products?category=${product?.categoryId._id}`} className="hover.underline">
          {product.categoryId.name}
        </Link> 
        &gt; {product.name}
      </nav>
      
      <div className="flex flex-col lg:flex-row justify-between">
        <ProductImage src={product.src} alt={product.alt} />
        <div className="flex flex-col xl:flex-row justify-between gap-8 lg:w-1/3 xl:w-1/2">
          <div className="xl:w-2/3">
            <ProductInfo product={product} />
          </div>
          <div className="xl:w-1/3">
            <ProductOrder product={product} />
          </div>
        </div>        

      </div>

    </div>
  )
}

export default ProductDetail