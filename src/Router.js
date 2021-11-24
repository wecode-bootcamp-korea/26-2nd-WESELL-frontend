import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Shop from './pages/Shop/Shop';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './pages/LoginRegister/Login';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/signin" element={<Main />} />
          {/* <Route path="/main" element={<Redirect />} /> */}
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="/products" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
