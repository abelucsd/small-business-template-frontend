import type { AddressFormValues } from "./types";
import AddressForm from "./AddressForm";


interface AddressInfoProps {
  addressInfo: AddressFormValues | undefined;
  isAddingAddress: boolean;
  handleAddAddress: () => void;
  handleSaveAddress: (newAddress: AddressFormValues) => void;  
}

const AddressInfo = ({addressInfo, isAddingAddress, handleAddAddress, handleSaveAddress}: AddressInfoProps) => {
  
  

  {/* Show delivery address */}
  return (          
    <div className="w-1/2">      
      {addressInfo && !isAddingAddress ? (        
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
      ) : 
        (<AddressForm setAddressInfo={handleSaveAddress}/> )
      }
    </div>
  )
}

export default AddressInfo