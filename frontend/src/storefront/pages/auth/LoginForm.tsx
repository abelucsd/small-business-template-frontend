import { useForm } from "react-hook-form";
import type { SubmitHandler } from 'react-hook-form';
import LoginFormInputs from "./LoginFormInputs";
import type { LoginFormValues } from './types'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data)
    // api request
  };

  return (
    <form className="container mx-auto login-form flex flex-col items-start gap-12"
      onSubmit={handleSubmit(onSubmit)}
    >

      <LoginFormInputs register={register} errors={errors} />
            
      <button 
        className="btn-login w-full md:w-[300px]"
        type="submit"
      >
        Login
      </button>
  </form>
  )
}

export default LoginForm