

interface OrderPriceProps {
  totalItems: number;
  totalItemsPrice: number;
  tax: number;
  shipping: number;
}

const OrderPrice = ({totalItems, totalItemsPrice, tax, shipping}: OrderPriceProps) => {

  return (
    <div className="w-2/5">
      <div className="flex flex-row justify-between"><p>Items ({totalItems}): </p><p>${totalItemsPrice}</p></div>        
      <div className="flex flex-row justify-between"><p>Shipping & handling: </p><p>${shipping}</p></div>
      <div className="flex flex-row justify-between"><p>Estimated tax to be collected: </p><p>${tax}</p></div>
      <div className="flex flex-row justify-between"><h2>Order Total: </h2><h2>${totalItemsPrice + shipping + tax}</h2></div>
    </div>
  )
}

export default OrderPrice