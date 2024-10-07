import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

ReactDOM.render(
  <Router>
    <Routes>
        <Route path="/DeepSky" element={<App />} />
        <Route path="/DeepSky/Page1" element={<Page1 />} />
        <Route path="/DeepSky/Page2" element={<Page2 />} />
        <Route path="/DeepSky/Page3" element={<Page3 />} />
        <Route path="/DeepSky/Page4" element={<Page4 />} />   
    </Routes>
  </Router>,
  document.getElementById('root')
);

