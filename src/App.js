import { useEffect, useState } from "react";
import "./App.css";
import Top from "./components/Top";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Components from "./pages/Components";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import Pages from "./pages/Pages";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Top/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/components" element={<Components />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
