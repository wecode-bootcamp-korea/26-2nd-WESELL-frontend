import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Shop from './pages/Shop/Shop';
import Order from './pages/Order/Order';
import Nav from './components/Nav/Nav';
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
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/order" element={<Order />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/buy/detail" element={<BuyDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
