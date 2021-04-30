import React from 'react'
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Usuarios cantidad= "10"/>
      <Footer />
    </div>
  );
}

export default App;
