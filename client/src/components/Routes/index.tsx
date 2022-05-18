import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../../pages/home";
import Profil from "./../../pages/profil";
import Trending from "./../../pages/trending";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
