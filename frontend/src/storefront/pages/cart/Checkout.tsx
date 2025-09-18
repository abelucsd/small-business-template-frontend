import { useEffect } from "react";
import { useCartContext } from "./CartProvider"

const Checkout = () => {
  const {
    items,
    totalUniqueItems,
  } = useCartContext();

  const itemsArray = Object.entries(items);
  let totalItemsPrice = 0;
  let tax = 0;
  let shipping = 0;

  useEffect(() => {
    itemsArray.forEach(([id, {item, quantity}]) => {
      totalItemsPrice = totalItemsPrice + (item.price * quantity);      
    })
    shipping = 5.99;
    // TODO: region component to calculate tax and shipping.    
    tax = totalItemsPrice * .10;
  }, [itemsArray])


  return (
    <div className="container mx-auto">
      {/* Place your oder at the top */}
      <button className="border rounded-lg bg-yellow-500">
        Place your order
      </button>

      {/* Show price, shipping, tax and total */}
      <div>
        <p>Items ({totalUniqueItems}): {totalItemsPrice}</p>
        <p>Shipping & handling: {shipping} </p>
        <p>Estimated tax to be collected: {tax}</p>
        <h1>Order Total: {totalItemsPrice + shipping + tax}</h1>
      </div>

      {/* Show delivery address */}

      {/* Show payment information */}

      {/* Estimated date time arrival */}

    </div>
  )
}

export default Checkout