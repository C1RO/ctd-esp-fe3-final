import React from 'react'
import Home from "./Home"
import Contact from "./Contact"
import Detail from "./Detail"
import Favs from "./Favs"

import {
  BrowserRouter,
  Routes, 
  Route
  
} from "react-router-dom";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Detail/:id" element={<Detail />} />
      <Route path="/Favs" element={<Favs />} />

      <Route path="/Contact" element={<Contact />} />

    </Routes>
  )
}

export default AppRouter