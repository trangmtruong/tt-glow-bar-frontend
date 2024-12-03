import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Craftmanship from "../Craftmanship/Craftmanship";
import BookService from "../BookService/BookService";
import SignUpModal from "../SignUpModal/SignUpModal";
import SignInModal from "../SignInModal/SignInModal";

function App() {
  //useState hooks
  const [activeModal, setActiveModal] = useState("");

  //functions
  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignUpModal = () => {
    setActiveModal("sign-up");
  };

  const handleSignInModal = () => {
    setActiveModal("sign-in");
  };

  return (
    <>
      <div className="app__content">
        <Header
          handleSignUpModal={handleSignUpModal}
          handleSignInModal={handleSignInModal}
        />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/craftmanship" element={<Craftmanship />} />
          <Route exact path="/book-service" element={<BookService />} />
        </Routes>
        <Footer />
      </div>
      <SignUpModal
        onClose={closeActiveModal}
        isOpen={activeModal === "sign-up"}
        handleSignUpModal={handleSignUpModal}
      />
      <SignInModal
        onClose={closeActiveModal}
        isOpen={activeModal === "sign-in"}
        handleSignInModal={handleSignInModal}
      />
    </>
  );
}

export default App;
