import Card from '../../../shared/components/Card';

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
  return (
    <div className='flex flex-row justify-center gap-12'>      
        {featuredProducts.map((card) => 
          <Card className='product-card'>
            <h2>{card.name}</h2>
            <p>{card.price}</p>
          </Card>
        )}
    </div>
  )
};

export default FeaturedProducts;