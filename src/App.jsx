import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default App;
