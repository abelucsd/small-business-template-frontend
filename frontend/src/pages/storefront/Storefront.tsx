import FeaturedProducts from './sections/FeaturedProducts'
import Hero from './sections/Hero'
import Testimonials from './sections/Testimonials'


const Storefront = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      {/* Banners
      Mission
      Testimonials*/}
    </div>
  );
};

export default Storefront;