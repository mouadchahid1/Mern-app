import React from 'react';
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/postDetails/PostDetails';

const App = () => { 
  const user = JSON.parse(localStorage.getItem("profile"));
  
  return (
    <Container maxWidth="xl">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Utilisez une redirection directement dans le composant App */}
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/posts" replace />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
