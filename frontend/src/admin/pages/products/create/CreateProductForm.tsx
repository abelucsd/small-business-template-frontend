import { useForm } from "react-hook-form";
import type { SubmitHandler } from 'react-hook-form';
import type { ProductFormValues } from "./types";
import ProductFormInputs from "./ProductFormInputs";
import {createProduct} from '../api/productsTableAPI';


const CreateProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<ProductFormValues>();

  const onSubmit: SubmitHandler<ProductFormValues> = async (data) => {    
    try {
      await createProduct(data);
    } catch (error) {
      alert('Error creating product');
    }
  };

  return (
    <form className="container mx-auto login-form flex flex-col items-start gap-12"
      onSubmit={handleSubmit(onSubmit)}
    >

      <ProductFormInputs register={register} errors={errors} />
            
      <button 
        className="btn-login w-full md:w-[300px]"
        type="submit"
      >
        Login
      </button>
  </form>
  )
}

export default CreateProductForm