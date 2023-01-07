import React, { useEffect } from 'react';
import style from './App.module.css';
import Router from "../router/Router";
import { BrowserRouter } from 'react-router-dom';
import { checkUser } from '../api/api';

const { mainDiv } = style;

function App() {
  useEffect(() => {
    if(!checkUser) localStorage.removeItem('user');
  }, []);

  return (
    <div className={mainDiv}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
