import { useEffect, useState } from 'react';
import Card from '../../../shared/components/Card';
import { useFeaturedProducts } from '../api/useFeaturedProducts';
import { useNavigate } from 'react-router-dom';


const FeaturedProducts = () => {
  const {
    products,    
    isLoading,
    isError, 
  } = useFeaturedProducts();

  const navigate = useNavigate();
  const handleProductClick = (id: string) => {
    // Navigate to ProductDetail page
    navigate(`/products/${id}`);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);  

  const getSlicedProducts = () => {
    if (windowWidth > 1024) return products.slice(0, 4);
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
      <div className='flex flex-col md:flex-row justify-between'>      
          {getSlicedProducts().map((card, index) => 
            <Card key={index}>
              <div className="product-card" onClick={() => handleProductClick(card.id)}>
                <img 
                  src={card.src}
                  alt={card.alt}
                />
                <h2>{card.name}</h2>
                <p>{card.price}</p>
              </div>
            </Card>
          )}
      </div>
    </div>
  )
};

export default FeaturedProducts;