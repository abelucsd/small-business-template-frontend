import { useForm } from "react-hook-form";
import type { SubmitHandler } from 'react-hook-form';
import type { ProductFormValues } from "./types";
import ProductFormInputs from "./ProductFormInputs";


const CreateProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<ProductFormValues>();

  const onSubmit: SubmitHandler<ProductFormValues> = (data) => {
    console.log(data)
    // api request
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