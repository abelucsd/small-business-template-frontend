import { Outlet } from 'react-router-dom';
import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer'


const Layout = () => {
  return (
    <div className=''>
      {/* <div className=''>
        <Navbar />
      </div> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;