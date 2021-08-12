import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Header from './todo/component/Header/header';


const App:React.FC=()=> {

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
