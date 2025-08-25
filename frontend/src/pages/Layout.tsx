import { Outlet } from 'react-router-dom';
import Navbar from '../shared/components/Navbar';


const Layout = () => {
  return (
    <div className='flex flex-col max-w-screen'>
      <div className='fixed top-0 left-0 w-full z-100'>
        <Navbar />
      </div>
      <main className='flex-grow max-w-screen'>
          <Outlet />
      </main>
      
    </div>
  );
};

export default Layout;