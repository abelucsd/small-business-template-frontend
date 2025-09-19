import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useCartContext } from '../CartProvider'

type Props = {}

const PaymentResult = (props: Props) => {
  const {
    clearItems
  } = useCartContext();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const success = params.get("success");  

  const navigate = useNavigate();

  useEffect(() => {    
    if(success != 'true') {
      navigate('/Checkout/')
    } else {
      clearItems();
    }
  }, [success, navigate])


  if (success && success === 'true') {    
    return (
      <div className='container mx-auto my-12'>
        <h1>Thank you!</h1>
      </div>
    )
  }  
  
}

export default PaymentResult