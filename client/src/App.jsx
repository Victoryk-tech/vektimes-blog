import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import Homepage from "../src/pages/Landingpage/HomePage.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditePage from "./pages/EditePage.jsx";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="edit/:id" element={<EditePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
