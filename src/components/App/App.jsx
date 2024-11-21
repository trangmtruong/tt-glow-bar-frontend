import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
