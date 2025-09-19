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
    <form 
      className="flex flex-col gap-10"
      onSubmit={handleSubmit(onAddressSubmit)}
    >
      
      {/* Button: Set Address */}  
      <AddressFormInputs register={register} errors={errors} />
      <div className="w-1/2">
        <button 
          className='border rounded-xl bg-gray-200 hover:bg-gray-400 hover:shadow-sm px-2 py-1'
          type='submit'
        >
          Set Address
        </button>
      </div>
    </form>
  )
}

export default AddressForm