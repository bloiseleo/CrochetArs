import React from 'react';
import AboutMe from '../../components/AboutMe';
import Header from '../../components/Header';
import ProductsList from '../../components/ProductsList';
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <main>
        <ProductsList></ProductsList>
        <AboutMe></AboutMe>
      </main>
    </>
  );
}

export default App;
