import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout/>
    </Router> 
  );
}

export default App;
