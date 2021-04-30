import Usuarios from './components/Usuarios';
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
