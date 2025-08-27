import { Outlet } from 'react-router-dom';
import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../storefront.css'

const queryClient = new QueryClient();

const Layout = () => {
  return (
    
    <div className='flex flex-col min-h-screen'>      
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <main className='flex-1'><Outlet /></main>
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default Layout;