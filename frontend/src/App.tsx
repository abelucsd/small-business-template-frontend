import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './pages/Layout';
import Storefront from './pages/storefront/Storefront';

function App() {  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Storefront />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
