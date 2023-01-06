import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate, useParams, useLocation } from 'react-router-dom';

import { Header, Footer } from './components';
import { Landing } from './pages';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
