import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './pages/Layout';
import Storefront from './pages/storefront/Storefront';
import About from './pages/informational/About';
import Contact from './pages/informational/Contact';
import PrivacyPolicy from './pages/informational/PrivacyPolicy';
import TermsAndConditions from './pages/informational/TermsAndConditions';
import Login from './pages/auth/Login';
import Products from './pages/products/Products';

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
