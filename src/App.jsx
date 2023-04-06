import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import MovieDetails from "./components/MovieDetail";
import Navbar from './components/Navbar';
import './components/css/App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/catalog/:userId" element={<Catalog />}></Route>
        <Route path="catalog/:userId/:movieId" element={<MovieDetails />}></Route>
      </Routes>
    </>
  )
}

export default App
