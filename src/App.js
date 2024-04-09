import React from 'react';
import Page1 from './components/Page1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page7 from './components/Page7';
import Loader from './components/Loader';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='/page4' element={<Page4 />} />
          <Route path='/page5' element={<Page5 />} />
          <Route path="/loader" element={<Loader />} />
          <Route path='/page7' element={<Page7 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
