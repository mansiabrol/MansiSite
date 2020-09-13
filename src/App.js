import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import Category from './components/Category'
function App() {
  return (
    <div>
     <Header/> 
     <Banner/>
     <Category/>
    </div>
  );
}

export default App;
