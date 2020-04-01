import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar title = "Aplicación"/>
        <Header/>
      </header>
    </div>
  );
}

export default App;
