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
import CalendarModal from "../CalendarModal/CalendarModal";

function App() {
  //useState hooks
  const [activeModal, setActiveModal] = useState("");

  const [selectedSrc, setSelectedSrc] = useState(null);

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
  const handleCalendarModal = () => {
    setActiveModal("book-calendar");
  };
  const handleSelectedCalendarSrc = (src) => {
    console.log(src);
    setSelectedSrc(src);
  };

  //onSignIn
  //onSignUp
  //handlecardLike

  //useEffects
  return (
    <>
      <div className="app__content">
        <Header
          handleSignUpModal={handleSignUpModal}
          handleSignInModal={handleSignInModal}
          handleSelectedCalendarSrc={handleSelectedCalendarSrc}
        />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/craftmanship" element={<Craftmanship />} />
          <Route
            exact
            path="/book-service"
            element={
              <BookService
                handleCalendarModal={handleCalendarModal}
                selectedSrc={selectedSrc}
                handleSelectedCalendarSrc={handleSelectedCalendarSrc}
              />
            }
          />
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
      <CalendarModal
        onClose={closeActiveModal}
        isOpen={activeModal === "book-calendar"}
        handleCalendarModal={handleCalendarModal}
        selectedSrc={selectedSrc}
      />
    </>
  );
}

export default App;
