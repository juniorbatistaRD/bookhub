import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { BookProvider } from "./contexts/BookContext";
import MainLayout from "./components/MainLayout";
import LandPage from "./pages/LandPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import AddBookPage from "./pages/AddBookPage";
import AddOptionsPage from "./pages/AddOptionsPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandPage />} />
          <ProtectedRoute path="/app" element={<MainLayout />}>
            <BookProvider>
              <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="add" element={<AddOptionsPage />} />
                <Route path="addBook/" element={<AddBookPage />} />
                <Route path="addBook/:id" element={<AddBookPage />} />
                <Route path="edit/:id" element={<EditPage />} />
              </Routes>
            </BookProvider>
          </ProtectedRoute>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
