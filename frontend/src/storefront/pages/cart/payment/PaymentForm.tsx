import axios from 'axios';
import { useCartContext } from '../CartProvider';
import { useEffect, useState } from 'react';
import type { AddressFormValues } from '../types';


interface PaymentFormProps {
  addressInfo: AddressFormValues | undefined;
};


const PaymentForm = ({addressInfo}: PaymentFormProps) => {
  const [error, setError] = useState<string | null>(null);  

  const { items } = useCartContext();  
  const dummyCart = Object.values(items).map( entry => entry.item);

  const handleCheckout = async () => {
    try {
      if(!addressInfo) {
        setError('Please fill in your delivery address before checkout.');
        return;
      }

      const res = await axios.post("http://localhost:4000/payments/create-checkout-session", {
        items: dummyCart,
        email: "test@example.com",
      });

      window.location.href = res.data.url;
    } catch (err) {
      alert("Checkout failed");
      console.error(err);
    }
  };

  useEffect(() => {
    setError(null);
  }, [addressInfo])

  
  return (
    <div className='w-full'>
      <button 
        onClick={handleCheckout}
        className='bg-blue-200 hover:bg-blue-400 rounded-xl px-4 py-2 w-full'
      >
        Test Stripe: Pay Now 
      </button>
      {error && (
        <p className="text-red-600 mt-2">{error}</p>
      )}
    </div>
  );
};

export default PaymentForm;