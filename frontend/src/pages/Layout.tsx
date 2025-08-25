import { Outlet } from 'react-router-dom';
import Navbar from '../shared/components/Navbar';


const Layout = () => {
  return (
    <div className='flex flex-col max-w-screen'>
      <div className=''>
        <Navbar />
      </div>
      <main className='flex-grow max-w-screen'>
          <Outlet />                  
      </main>
      {/* Footer */}
    </div>
  );
};

export default Layout;