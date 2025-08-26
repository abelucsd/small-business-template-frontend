import { Outlet } from 'react-router-dom';
import Navbar from '../shared/components/Navbar';
import '../admin.css';


const AdminLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>      
      <Navbar />
      <main className='flex-1'><Outlet /></main>      
    </div>
  );
};

export default AdminLayout;