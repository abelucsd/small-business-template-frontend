import { useForm } from "react-hook-form";
import type { SubmitHandler } from 'react-hook-form';
import type { CategoryFormValues } from "./types";
import CategoryFormInputs from "./CategoryFormInputs";


const CreateCategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<CategoryFormValues>();

  const onSubmit: SubmitHandler<CategoryFormValues> = (data) => {
    console.log(data)
    // api request
  };

  return (
    <form className="container mx-auto login-form flex flex-col items-start gap-12"
      onSubmit={handleSubmit(onSubmit)}
    >

      <CategoryFormInputs register={register} errors={errors} />
            
      <button 
        className="btn-login w-full md:w-[300px]"
        type="submit"
      >
        Login
      </button>
  </form>
  )
}

export default CreateCategoryForm