import React from 'react';
import AboutMe from '../../components/AboutMe';
import Header from '../../components/Header';
import Orcamento from '../../components/Orcamento';
import ProductsList from '../../components/ProductsList';
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <main>
        <ProductsList></ProductsList>
        <AboutMe></AboutMe>
        <Orcamento></Orcamento>
      </main>
    </>
  );
}

export default App;
