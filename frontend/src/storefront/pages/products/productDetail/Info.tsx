
interface ProductInfoProps {
  name: string;
  price: number;
  description?: string;
}

const ProductInfo = ({name, price, description}: ProductInfoProps) => {

  return (
    <div className="flex flex-col gap-4">
      <h2>{name}</h2>
      <h3>{price}</h3>
      <h4>{description}</h4>
    </div>
  )
}

export default ProductInfo