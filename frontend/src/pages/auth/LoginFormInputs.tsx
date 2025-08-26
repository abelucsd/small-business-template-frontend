import type { FieldErrors, UseFormRegister } from "react-hook-form"
import type { LoginFormValues } from './types'

interface LoginFormInputs {
  register: UseFormRegister<LoginFormValues>;
  errors: FieldErrors<LoginFormValues>;
};

const LoginFormInputs = ({register, errors}: LoginFormInputs) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <label>
          <h3>Email Address:</h3>
          <input
              type="email" 
              {...register("email", { required: "Email is required" })}
              required            
              className="block border rounded-md w-full md:w-[300px] grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
          />
          {errors.email && (
            <p>{errors.email.message}</p>
          )}

      </label>
      <label>
          <h3>Password:</h3>
          <input           
            type="password" 
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min length is 6" },
            })}
            required
            className="block border rounded-md w-full md:w-[300px] grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
          />
          {errors.password && (
            <p>{errors.password.message}</p>
          )}
      </label>

    </div>
  )
}

export default LoginFormInputs