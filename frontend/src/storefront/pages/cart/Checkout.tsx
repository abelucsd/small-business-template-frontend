import { useEffect, useState } from "react";
import { useCartContext } from "./CartProvider"
import AddressInfo from "./AddressInfo";
import OrderPrice from "./OrderPrice";
import PaymentForm from "./payment/PaymentForm";
import type { AddressFormValues } from "./types";

const Checkout = () => {
  const {
    items,
    totalItems,    
  } = useCartContext();

  const [totals, setTotals] = useState<{itemsPrice: number, tax: number, shipping: number}>({
    itemsPrice: 0,
    tax: 0,
    shipping: 0,
  })  

  const [addressInfo, setAddressInfo] = useState<AddressFormValues | undefined>(() => {
    const stored = localStorage.getItem("addressInfo")
    return stored ? JSON.parse(stored) : undefined;
  });

  const [isAddingAddress, setIsAddingAddress] = useState<boolean>(false);

  const handleAddAddress = () => {
    localStorage.removeItem("addressInfo");
    setAddressInfo(undefined);
    setIsAddingAddress(true);
  };

  const handleSaveAddress = (newAddress: AddressFormValues) => {
    setAddressInfo(newAddress);
    localStorage.setItem("addressInfo", JSON.stringify(newAddress));
    setIsAddingAddress(false);
  };


  useEffect(() => {
    let totalItemsPrice = 0
    const itemsArray = Object.entries(items);
    itemsArray.forEach(([id, {item, quantity}]) => {
      totalItemsPrice = totalItemsPrice + (item.price * quantity);      
    })
      
    let shipping = 2.99
    // TODO: region component to calculate tax and shipping.    
    let tax = totalItemsPrice * .10;

    setTotals({
      itemsPrice: Number(totalItemsPrice.toFixed(2)),
      shipping: Number(shipping.toFixed(2)),
      tax: Number(tax.toFixed(2)),
    })

  }, [items])
  

  return (
    <div className="container mx-auto my-12 flex flex-col justify-between gap-8">
      <h1>Secure Checkout</h1>
      

      {/* Place your order at the top */}       
      <PaymentForm addressInfo={addressInfo}/>      

      <div className="flex flex-row justify-between">
        <AddressInfo addressInfo={addressInfo} isAddingAddress={isAddingAddress} handleAddAddress={handleAddAddress} handleSaveAddress={handleSaveAddress}/>
        {/* Show price, shipping, tax and total */}
        <OrderPrice totalItems={totalItems} totalItemsPrice={totals.itemsPrice} shipping={totals.shipping} tax={totals.tax}/>        
      </div>      

      {/* Estimated date time arrival */}

    </div>
  )
}

export default Checkout