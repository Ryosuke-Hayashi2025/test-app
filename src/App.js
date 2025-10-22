// App.js

import React from "react";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;
