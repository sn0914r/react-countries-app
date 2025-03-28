import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewCountry from './components/ViewCountry/ViewCountry';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='/react-countries-app' >
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/country' element={<ViewCountry/>}/>
        </Routes>
    </BrowserRouter>
);
reportWebVitals();
