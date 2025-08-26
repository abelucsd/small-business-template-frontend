import { Outlet } from 'react-router-dom';
import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer'


const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>      
      <Navbar />
      <main className='flex-1'><Outlet /></main>
      <Footer />      
    </div>
  );
};

export default Layout;