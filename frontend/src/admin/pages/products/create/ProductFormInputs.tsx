import type { FieldErrors, UseFormRegister } from "react-hook-form"
import type { ProductFormValues } from "./types";

interface LoginFormInputs {
  register: UseFormRegister<ProductFormValues>;
  errors: FieldErrors<ProductFormValues>;
};

const ProductFormInputs = ({register, errors}: LoginFormInputs) => {
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

      <label>
          <h3>Category:</h3>
          <input           
            type="text" 
            {...register("category", {
              required: "Category is required",
              minLength: { value: 3, message: "Min length is 3" },
            })}
            required
            className="block border rounded-md w-full md:w-[300px] grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
          />
          {errors.category && (
            <p>{errors.category.message}</p>
          )}
      </label>

      <label>
          <h3>Price:</h3>
          <input           
            type="number" 
            step="0.01"
            {...register("price", {
              required: "Price is required",
              min: { value: 0, message: "Price must be >= 0" },
            })}
            required
            className="block border rounded-md w-full md:w-[300px] grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
          />
          {errors.price && (
            <p>{errors.price.message}</p>
          )}
      </label>

      <label>
          <h3>Sale Price:</h3>
          <input           
            type="number" 
            step="0.01"
            {...register("salePrice", {
              required: "Sale Price is required",
              min: { value: 0, message: "Sale price must be >= 0" },
            })}            
            className="block border rounded-md w-full md:w-[300px] grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
          />
          {errors.salePrice && (
            <p>{errors.salePrice.message}</p>
          )}
      </label>

      <label>
          <h3>Cost:</h3>
          <input           
            type="number" 
            step="0.01"
            {...register("cost", {
              required: "Cost is required",
              min: { value: 0, message: "Cost must be >= 0" },
            })}            
            className="block border rounded-md w-full md:w-[300px] grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
          />
          {errors.cost && (
            <p>{errors.cost.message}</p>
          )}
      </label>

      <label>
          <h3>Description:</h3>
          <input           
            type="text" 
            {...register("description", {
              required: "Description is required",
              minLength: { value: 3, message: "Min length is 3" },
            })}            
            className="block border rounded-md w-full md:w-[300px] grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
          />
          {errors.description && (
            <p>{errors.description.message}</p>
          )}
      </label>

    </div>
  )
}

export default ProductFormInputs