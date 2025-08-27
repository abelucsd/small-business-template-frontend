import { useEffect, useState } from 'react';
import Card from '../../../shared/components/Card';
import type { Product } from '../../products/types';
import { useFeaturedProducts } from '../api/useFeaturedProducts';

// TODO: Get from backend
const featuredProducts = [
  {
    name: "Test Prod 1",
    price: 4.99,
  },
  {
    name: "Test Prod 2",
    price: 9.99,
  }
];


const FeaturedProducts = () => {
  const {
    products,    
    isLoading,
    isError, 
  } = useFeaturedProducts();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);  

  const getSlicedProducts = () => {
    if (windowWidth >= 1024) return products.slice(0, 4);
    if (windowWidth >= 768) return products.slice(0, 3);
    if (windowWidth >= 640) return products.slice(0,2);
    return products.slice(0,2);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  })

  if (isLoading || isError) {
    return (
      <div>Loading...</div>
    )
  }
  
  return (
    <div className='container mx-auto flex flex-col gap-12'>
      <h2>Featured Products</h2>
      <div className='flex flex-col md:flex-row justify-center gap-12'>      
          {getSlicedProducts().map((card) => 
            <Card className='product-card'>
              <h2>{card.name}</h2>
              <p>{card.price}</p>
            </Card>
          )}
      </div>
    </div>
  )
};

export default FeaturedProducts;