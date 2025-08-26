import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './storefront/pages/Layout';
import Storefront from './storefront/pages/storefront/Storefront';
import About from './storefront/pages/informational/About';
import Contact from './storefront/pages/informational/Contact';
import PrivacyPolicy from './storefront/pages/informational/PrivacyPolicy';
import TermsAndConditions from './storefront/pages/informational/TermsAndConditions';
import Login from './storefront/pages/auth/Login';
import Products from './storefront/pages/products/Products';


function App() {  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Storefront />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Privacy_Policy" element={<PrivacyPolicy />} />
            <Route path="/Terms_And_Conditions" element={<TermsAndConditions />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Products" element={<Products />} />            
          </Route>
          <Route path="/Admin/" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/Products/view" element={<ViewProducts />} />
            <Route path="/Products/add" element={<CreateProduct />} />
            <Route path="/Categories/view" element={<ViewCategories />} />
            <Route path="/Categories/add" element={<CreateCategory />} />            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
