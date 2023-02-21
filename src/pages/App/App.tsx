import React from 'react';
import Header from '../../components/Header';
import ProductsList from '../../components/ProductsList';
import './App.css'

function App() {
  return (
    <>
        <Header></Header>
      <main>
        <ProductsList></ProductsList>
      </main>
    </>
  );
}

export default App;
