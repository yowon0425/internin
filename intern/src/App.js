import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import CardRegister from './CardRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/card-register" element={<CardRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
