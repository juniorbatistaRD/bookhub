import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import MainLayout from './components/MainLayout';
import LandPage from './pages/LandPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/SignUpPage';
import SignUpPage from './pages/LoginPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route element={<MainLayout/>}>
          <Route path="home" element={<HomePage/>}/>
          <Route path="profile" element={<ProfilePage/>}/>
          <Route path="search" element={<SearchPage/>}/>
        </Route>
      </Routes>
    </Router> 
  );
}

export default App;
