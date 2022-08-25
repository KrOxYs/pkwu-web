
// import About from './About/About';
import './App.css';

// import routertest from './routertest';
import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
// import Routertest from './routertest';
import MainPage from './mainPage/Page';
import Forms from './forms/Forms';
import FinalStep from './Bukti Pembelian/Bukti';
import { useState } from 'react';
const App = ({setRoutes}) =>  {
  const [route,setRoute] = useState(setRoutes)
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='buy-product' element={<Forms/>} />
        {/* {route && <Route path='final-step' element={<FinalStep/>} />} */}
        {/* <Route path='final-step' element={<FinalStep/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
