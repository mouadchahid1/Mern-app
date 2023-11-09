import React from 'react';
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
