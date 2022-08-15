
import './App.css';
import CaraoselSlide from './Caraousel/Caraosel';
import Product from './main/product';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
     <Navbar/>
    <Product productTitle="Ini Desktripsi Product"/>
    <CaraoselSlide/>
    </div>
  );
}

export default App;
