import React  from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import ProtectedRoute from './components/ProtectedRoute'
import {AuthProvider} from './contexts/AuthContext'
import MainLayout from './components/MainLayout';
import LandPage from './pages/LandPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/SignUpPage';
import SignUpPage from './pages/LoginPage';
import AddBookPage from './pages/AddBookPage';
import AddOptionsPage from './pages/AddOptionsPage';


function App() {
  return (
    <AuthProvider>
      <Router>
          <Routes>
            <Route path="/" element={<LandPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <ProtectedRoute path="/app" element={<MainLayout/>}>
              <Route path="home" element={<HomePage/>}/>
              <Route path="profile" element={<ProfilePage/>}/>
              <Route path="search" element={<SearchPage/>}/>
              <Route path="add" element={<AddOptionsPage/>}/>
              <Route path="addBook/:id" element={<AddBookPage/>}/>
            </ProtectedRoute>
          </Routes>
      </Router>
    </AuthProvider>
 
  );
}

export default App;
