import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import ProductListingPage from './Components/ProductListingPage';
import ShoppingCartPage from './Components/ShoppingCartPage';
import Header from './Components/Header';

function App() {
  return (
    <Router basename="/ShoppingProject">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/product-listing' element={<ProductListingPage />} />
        <Route path='/shopping-cart' element={<ShoppingCartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
