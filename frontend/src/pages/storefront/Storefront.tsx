import Banner from './sections/Banner';
import BannerVideo from './sections/BannerVideo';
import FeaturedProducts from './sections/FeaturedProducts'
import Hero from './sections/Hero'
import Testimonials from './sections/Testimonials'


const Storefront = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Banner />
      <Testimonials />
      <BannerVideo />
      {/* Mission */}
    </div>
  );
};

export default Storefront;