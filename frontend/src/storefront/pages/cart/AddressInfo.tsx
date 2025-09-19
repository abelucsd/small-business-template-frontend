import { useState } from "react";
import type { AddressFormValues } from "./types";
import AddressForm from "./AddressForm";


const AddressInfo = () => {
  const [addressInfo, setAddressInfo] = useState<AddressFormValues | undefined>(() => {
    const stored = localStorage.getItem("addressInfo")
    return stored ? JSON.parse(stored) : undefined;
  });

  const [isAddingAddress, setIsAddingAddress] = useState<boolean>(false);

  const handleAddAddress = () => {
    setIsAddingAddress(true);
  };

  
  {/* Show delivery address */}
  return (          
    <div className="w-1/2">      
      {addressInfo != undefined ? (
        isAddingAddress ? (
          <AddressForm setAddressInfo={setAddressInfo}/>
        ) : (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2>Delivering to {addressInfo.name}</h2>            
              <p>{addressInfo.address}, {addressInfo.city}, {addressInfo.state}, {addressInfo.zipCode}</p>
              <p>{addressInfo.phone}</p>
            </div>
            <div className="w-1/3">
              <button 
                className="text-blue-600 hover:text-blue-700"
                onClick={handleAddAddress}
              >
                Add/Change Address
              </button>
            </div>
          </div>
        )
      ) : 
        (<AddressForm setAddressInfo={setAddressInfo}/> )
      }
    </div>
  )
}

export default AddressInfo