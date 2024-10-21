import './App.css';
import React from 'react';
import Header from '../components/template/header/index';
import Footer from '../components/template/footer';
import Content from '../components/routes/Content';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
