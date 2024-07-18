import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import ProductListingPage from './Components/ProductListingPage';
import ShoppingCartPage from './Components/ShoppingCartPage'; // Import the ShoppingCartPage component
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/product-listing' element={<ProductListingPage />} />
        <Route path='/shopping-cart' element={<ShoppingCartPage />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
