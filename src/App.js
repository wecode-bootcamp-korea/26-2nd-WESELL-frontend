import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Shop from './pages/Shop/Shop';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
