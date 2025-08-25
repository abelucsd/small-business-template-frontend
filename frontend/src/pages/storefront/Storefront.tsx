import FeaturedProducts from './sections/FeaturedProducts'
import Hero from './sections/Hero'

type Props = {}

const Storefront = (props: Props) => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      {/* Banners
      FeaturedProducts      
      Testimonials*/}
    </div>
  )
}

export default Storefront