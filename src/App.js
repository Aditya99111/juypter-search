import "./App.css";
import Landing from "./Landing";
import Search from "./Pages/Search";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Landing />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
