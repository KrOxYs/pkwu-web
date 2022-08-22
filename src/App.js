
import About from './About/About';
import './App.css';
import CaraoselSlide from './Caraousel/Caraosel';
import Header from './Header/Header';
import Product from './main/product';
import Navbar from './Navbar';
// import routertest from './routertest';
import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Routertest from './routertest';
import MainPage from './mainPage/Page';
import Forms from './forms/Forms';
const App = () =>  {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='buy-product' element={<Forms/>} />
      </Routes>
    </div>
  );
}

export default App;
