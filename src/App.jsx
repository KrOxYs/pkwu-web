
// import About from './About/About';
import './App.css';

// import routertest from './routertest';
import {BrowserRouter, Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
// import Routertest from './routertest';
import MainPage from './mainPage/Page';
import Forms from './forms/Forms';
import FinalStep from './Bukti Pembelian/Bukti';
import { useState } from 'react';
const App = (showRoutes) =>  {
  const [route,setRoute] = useState(false);
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='buy-product' element={<Forms/>} />
          {/* <Route path='final-step' element={<FinalStep/>}/> */}
        {/* {route && <Route path='final-step' element={<FinalStep/>} />} */}
        <Route path='buy-product/final-step' element={<FinalStep/>} />
  
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
