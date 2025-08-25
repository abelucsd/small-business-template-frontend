import FeaturedProducts from './sections/FeaturedProducts'
import Hero from './sections/Hero'
import Testimonials from './sections/Testimonials'

type Props = {}

const Storefront = (props: Props) => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      {/* Banners        
      Testimonials*/}
    </div>
  )
}

export default Storefront