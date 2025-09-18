import { useEffect, useState } from "react";
import { useCartContext } from "./CartProvider"
import AddressForm from "./AddressForm";
import type { AddressFormValues } from "./types";

const Checkout = () => {
  const {
    items,
    totalUniqueItems,
  } = useCartContext();

  const [addressInfo, setAddressInfo] = useState<AddressFormValues | undefined>(undefined);
  const [isAddingAddress, setIsAddingAddress] = useState<boolean>(false);

  const handleAddAddress = () => {
    setIsAddingAddress(true);
  };


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
      {addressInfo !== undefined ? (        
        <div>
          <p>{addressInfo.name}</p>
          <p>{addressInfo.phone}</p>
          <p>{addressInfo.address}</p>
          <div>
            <p>{addressInfo.city}</p>
            <p>{addressInfo.state}</p>
            <p>{addressInfo.zipCode}</p>
          </div>
        </div>
      ) : isAddingAddress                    
        ? ( <AddressForm setAddressInfo={setAddressInfo}/> )
        : (<button onClick={handleAddAddress}>Add Address</button> )
      }
      

      {/* Show payment information */}

      {/* Estimated date time arrival */}

    </div>
  )
}

export default Checkout