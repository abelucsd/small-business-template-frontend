
interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProductImage = ({src, alt, className}: ProductImageProps) => {
  return (
    <div className={`${className} flex-shrink-0 w-full md:w-1/2 xl:w-2/5`}>
      <img 
        src={src}
        alt={alt}
        className="w-full h-auto rounded shadow"
      />
    </div>
  )
}

export default ProductImage