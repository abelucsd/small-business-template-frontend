import { BrowserRouter, Route, Routes } from 'react-router';

import {CheckoutProvider} from '@stripe/react-stripe-js/checkout';
import {loadStripe} from '@stripe/stripe-js';
import Layout from './storefront/pages/Layout';
import Storefront from './storefront/pages/storefront/Storefront';
import About from './storefront/pages/informational/About';
import Contact from './storefront/pages/informational/Contact';
import PrivacyPolicy from './storefront/pages/informational/PrivacyPolicy';
import TermsAndConditions from './storefront/pages/informational/TermsAndConditions';
import Login from './storefront/pages/auth/Login';
import Products from './storefront/pages/products/Products';

// admin
import AdminLayout from './admin/pages/AdminLayout';
import Dashboard from './admin/pages/dashboard/Dashboard';
import ViewProducts from './admin/pages/products/view/ViewProducts';
import CreateProduct from './admin/pages/products/create/CreateProduct';
import ViewCategories from './admin/pages/categories/view/ViewCategories';
import CreateCategory from './admin/pages/categories/create/CreateCategory';
import ProductDetail from './storefront/pages/products/ProductDetail';
import CartDrawer from './storefront/pages/cart/CartDrawer';
import Checkout from './storefront/pages/cart/Checkout';
import { CartProvider } from './storefront/pages/cart/CartProvider';
import apiClient from './storefront/shared/api/apiClient';
import PaymentResult from './storefront/pages/cart/payment/PaymentResult';
import { useEffect } from 'react';


// Stripe Payment
const stripePromise = loadStripe('pk_test_51S96jkEL9gxUL0iZEW9Vualw5fmLQAVvmNrGXsMzTGdP0CxdeshymoJLFSSZLmY0EhcXllp02HzIhEt3RTugU8eu00RCdSBhCt');

const fetchClientSecret = async () => {
  const response = await apiClient.post('/payments/create-checkout-session', {
    
  })

  return response.data.checkoutSessionClientSecret;
};

const options = { fetchClientSecret }


function App() {  

  useEffect(() => {
    document.title = "Ecommerce Template"
  }, []);

  return (
    <>
      <BrowserRouter>
        <CheckoutProvider stripe={stripePromise} options={options}>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Storefront />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Privacy_Policy" element={<PrivacyPolicy />} />
                <Route path="/Terms_And_Conditions" element={<TermsAndConditions />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Products/Category/:categoryName" element={<Products />} />
                <Route path="/Products/:id" element={<ProductDetail />} />
                <Route path="/Cart" element={<CartDrawer />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/payment-result" element={<PaymentResult />} />
              </Route>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="/admin/Products/view" element={<ViewProducts />} />
                <Route path="/admin/Products/add" element={<CreateProduct />} />
                <Route path="/admin/Categories/view" element={<ViewCategories />} />
                <Route path="/admin/Categories/add" element={<CreateCategory />} />
              </Route>
            </Routes>
          </CartProvider>
        </CheckoutProvider>
      </BrowserRouter>
    </>
  )
}

export default App