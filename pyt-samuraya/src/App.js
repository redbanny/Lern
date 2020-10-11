import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
   <BrowserRouter>
      <div className='app-wrapper'> 
        <Header />
        <Page />
      </div>
    </BrowserRouter>
  );
}

export default App;
