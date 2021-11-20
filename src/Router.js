import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Shop from './pages/Shop/Shop';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer';
import Login from './pages/LoginRegister/Login';
import StyleTrend from './pages/StyleTrend/StyleTrend';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/signin" element={<Main />} />
        {/* <Route path="/main" element={<Redirect />} /> */}
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/style" element={<StyleTrend />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
