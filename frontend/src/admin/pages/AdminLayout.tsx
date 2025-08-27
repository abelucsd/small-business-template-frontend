import { Outlet } from 'react-router-dom';
import Navbar from '../shared/components/Navbar';
import Sidenav from '../shared/components/Sidenav';
import { DropdownProvider } from '../shared/providers/DropdownProvider';
import '../admin.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const AdminLayout = () => {
  return (
    <div className='flex flex-row max-w-screen bg-gray-50'>
      <QueryClientProvider client={queryClient}>
        <DropdownProvider>
          <div className='max-[1280px]:hidden fixed h-full z-101'>
            <Sidenav />
          </div>
          <div className='max-[1280px]:hidden w-64'/>
        

          <div className='flex-1 flex flex-col'>
            <div className='fixed top-0 left-0 w-full z-100'>
              <Navbar />
            </div>
            <div className='h-24'/>        
            <main className='flex-grow max-w-screen'>
              <Outlet />
            </main>
          </div>
        </DropdownProvider>
      </QueryClientProvider>
      
    </div>
  );
};

export default AdminLayout;