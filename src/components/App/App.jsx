import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Craftmanship from "../Craftmanship/Craftmanship";
import BookService from "../BookService/BookService";

function App() {
  const [activeModal, setActiveModal] = useState("");

  return (
    <>
      <div className="app__content">
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/craftmanship" element={<Craftmanship />} />
          <Route exact path="/book-service" element={<BookService />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
