import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import HomePage from './home/HomePage';
import Signup from "./signup/Signup";
import AboutPage from "./about/AboutPage";
import ProductPage from "./products/ProductsPage";
import PricingPage from "./pricing/PricingPage";
import SupportPage from "./support/SupportPage";
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './NotFound';

// import App from './App';
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='signup' element={<Signup/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
          <Route path='/pricing' element={<PricingPage/>}/>
          <Route path='/support' element={<SupportPage/>}/>
            <Route path='*' element={<NotFound/>}/>
     </Routes>
     
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
