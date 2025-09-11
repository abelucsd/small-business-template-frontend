import Filterbar from '../../shared/components/Filterbar';
import Banner from './sections/Banner';
import BannerVideo from './sections/BannerVideo';
import FeaturedProducts from './sections/FeaturedProducts'
import Hero from './sections/Hero'
import Testimonials from './sections/Testimonials'


const Storefront = () => {
  return (
    <div className='flex flex-col gap-32'>
      <Filterbar />
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