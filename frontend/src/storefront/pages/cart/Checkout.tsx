import { useEffect } from "react";
import { useCartContext } from "./CartProvider"
import AddressInfo from "./AddressInfo";
import OrderPrice from "./OrderPrice";

const Checkout = () => {
  const {
    items,
    totalItems,
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
    <div className="container mx-auto my-12 flex flex-col justify-between gap-8">
      <h1>Secure Checkout</h1>

      {/* Place your oder at the top */}
      <button className="border rounded-lg bg-yellow-300 w-full">
        Place your order
      </button>

      <div className="flex flex-row justify-between">
        <AddressInfo />
        {/* Show price, shipping, tax and total */}
        <OrderPrice totalItems={totalItems} totalItemsPrice={totalItemsPrice} shipping={shipping} tax={tax}/>        
      </div>      
      

      {/* Show payment information */}

      {/* Estimated date time arrival */}

    </div>
  )
}

export default Checkout