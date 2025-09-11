import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../storefront.css'

const queryClient = new QueryClient();

const Layout = () => {
  const location = useLocation();

  let backgroundColor = '#fff';

  if (location.pathname === '/Login') backgroundColor = '#f3f3f3';  

  return (
    
    <div className='flex flex-col min-h-screen'>      
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <main className='flex-1' style={{ backgroundColor }}><Outlet /></main>
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default Layout;