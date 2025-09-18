import { useForm } from "react-hook-form";
import type { AddressFormValues } from "./types";
import AddressFormInputs from "./AddressFormInputs";

interface AddressFormProps {
  setAddressInfo: React.Dispatch<React.SetStateAction<AddressFormValues | undefined>>;
};

const AddressForm = ({setAddressInfo}: AddressFormProps) => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<AddressFormValues>();

  const onAddressSubmit = (data: AddressFormValues) => {
    setAddressInfo(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onAddressSubmit)}>
      
      {/* Button: Set Address */}  
      <AddressFormInputs register={register} errors={errors} />
      <button 
        className='border bg-yellow-500 rounded pd-2'
        type='submit'
      >
        Set Address
      </button>
    </form>
  )
}

export default AddressForm