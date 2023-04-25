import { useEffect, useState } from "react";
import "./App.css";
import Top from "./components/Top";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Top />
      
          <Navbar  />
          <Hero />
       
    </>
  );
};

export default App;
