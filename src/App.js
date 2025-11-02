// App.js

import React from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
