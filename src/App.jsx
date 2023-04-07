import React from 'react'
import { Route, Routes } from "react-router-dom";
import './components/css/App.css'
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import MovieDetails from "./components/MovieDetail";
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/catalog/:movieId" element={<MovieDetails />}></Route>
        <Route path="/:userId/catalog" element={<Catalog />}></Route>
        <Route path="/:userId/catalog/:movieId" element={<MovieDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
