import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/headerSection/Header";
import Register from "./pages/register";
import Profile from "./pages/profilePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import HotelIndex from "./pages/HotelIndex";
import HotelShow from "./pages/HotelShow";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "http://localhost:4000/";

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/hotels" element={<HotelIndex URL={URL} />} />
          <Route exact path="/hotels/:id" element={<HotelShow URL={URL} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
