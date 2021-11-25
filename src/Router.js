import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Shop from './pages/Shop/Shop';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer';
import Login from './pages/LoginRegister/Login';
import StyleTrend from './pages/StyleTrend/StyleTrend';
import Order from './pages/Order/Order';
import OrderDetail from './pages/Order/OrderDetail';
import Redirect from './components/KakaoLogin/Redirect';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:productID" element={<ProductDetail />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/style" element={<StyleTrend />} />
        <Route path="/buy" element={<Order type="buy" />} />
        <Route path="/sell" element={<Order type="sell" />} />
        <Route path="/buy/detail" element={<OrderDetail type="buy" />} />
        <Route path="/sell/detail" element={<OrderDetail type="sell" />} />
        <Route path="/users/signin" element={<Redirect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
