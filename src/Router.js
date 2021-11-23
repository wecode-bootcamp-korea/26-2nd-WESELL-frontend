import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Shop from './pages/Shop/Shop';
import Order from './pages/Order/Order';
import Modal from './pages/ProductDetail/components/Modal';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer';
import Login from './pages/LoginRegister/Login';
import Redirect from './components/KakaoLogin/Redirect';
import Buy from './pages/Order/Buy';
import BuyDetail from './pages/Order/BuyDetail';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main" element={<Redirect />} />
          {/* <Route path="/users/signin" element={<Redirect />} /> */}
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/order" element={<Order />} />
          {/* <Route path="/modal" element={<Modal />} /> */}
          <Route path="/buy" element={<Buy />} />
          <Route path="/buy/detail" element={<BuyDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
