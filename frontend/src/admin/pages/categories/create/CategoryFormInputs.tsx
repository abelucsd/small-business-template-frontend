import type { FieldErrors, UseFormRegister } from "react-hook-form"
import type { CategoryFormValues } from "./types";

interface CategoryFormInputsProps {
  register: UseFormRegister<CategoryFormValues>;
  errors: FieldErrors<CategoryFormValues>;
};

const CategoryFormInputs = ({register, errors}: CategoryFormInputsProps) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <label>
          <h3>ID:</h3>
          <input
              type="text" 
              {...register("id", { required: "id is required" })}
              required            
              className="block border rounded-md w-full md:w-[300px] grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
          />
          {errors.id && (
            <p>{errors.id.message}</p>
          )}

      </label>
      <label>
          <h3>Name:</h3>
          <input           
            type="text" 
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Min length is 3" },
            })}
            required
            className="block border rounded-md w-full md:w-[300px] grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
          />
          {errors.name && (
            <p>{errors.name.message}</p>
          )}
      </label>

    </div>
  )
}

export default CategoryFormInputs