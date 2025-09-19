import React from 'react';
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { AddressFormValues } from './types';


interface AddressFormInputsProps {
  register: UseFormRegister<AddressFormValues>;
  errors: FieldErrors<AddressFormValues>;
};


const AddressFormInputs = ({register, errors}: AddressFormInputsProps) => {
  return (
    <div className='flex flex-col justify-between gap-6'>
      <label>
        <h3>Name</h3>
        <input 
          type="text"
          {...register("name", {required: "Customer name is required."})}
          required
          className="input-box block border rounded-md w-full md:w-full grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
        />
        {errors.name && (
          <p>errors.name.message</p>
        )}
      </label>

      <label>
        <h3>Phone</h3>
        <input 
          type="text"
          {...register("phone", {required: "Phone number is required."})}
          required
          className="input-box block border rounded-md w-full md:w-full grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
        />
        {errors.phone && (
          <p>errors.phone.message</p>
        )}
      </label>

      <label>
        <h3>Address</h3>
        <input 
          type="text"
          {...register("address", {required: "Address is required."})}
          required
          className="input-box block border rounded-md w-full md:w-full grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
        />
        {errors.address && (
          <p>errors.address.message</p>
        )}
      </label>
      
      <label>
        <h3>Apt, Suite, or Unit</h3>
        <input 
          type="text"
          {...register("homeNumber")}
          className="input-box block border rounded-md w-full md:w-full grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
        />
        {errors.homeNumber && (
          <p>errors.homeNumber.message</p>
        )}
      </label>

      <label>
        <h3>City</h3>
        <input 
          type="text"
          {...register("city", {required: "City is required."})}
          required
          className="input-box block border rounded-md w-full md:w-full grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
        />
        {errors.city && (
          <p>errors.city.message</p>
        )}
      </label>

      <label>
        <h3>State</h3>
        <input 
          type="text"
          {...register("state", {required: "State is required."})}
          required
          className="input-box block border rounded-md w-full md:w-full grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
        />
        {errors.state && (
          <p>errors.state.message</p>
        )}
      </label>

      <label>
        <h3>Zipcode</h3>
        <input 
          type="text"
          {...register("zipCode", {required: "Zip Code is required."})}
          required
          className="input-box block border rounded-md w-full md:w-full grow mt-4 py-2 pr-3 pl-1 textr-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6 "
        />
        {errors.zipCode && (
          <p>errors.zipCode.message</p>
        )}
      </label>    
    </div>
  )
};

export default AddressFormInputs;