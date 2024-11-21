import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header.js";
import Footer from "./components/common/footer/Footer.js";
import Homepages from "./components/home/Homepages.js";
import SinglePage from "./components/singlePage/SinglePage.js";
import Culture from "./components/culture/Culture.js";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import "./App.css";
import Dates from "./components/date/Dates.js";

const App = () => {
  return (
    <>
      <Router>
        <div className="front">
        <Dates />
          <div className="logo">
            <img src="/src/logo1.png" alt="" />
          </div>
          <div id="glowing-div">
          <div id="google_element"></div>
          </div>
          <div className="user-info">
          <SignedOut>
          <div className="auth-container">
            <SignInButton />
          </div>
        </SignedOut>
            <UserButton />
          </div>
        </div>
        <Header />
          <Routes>
            <Route path="/" element={<Homepages />} />
            <Route path="/singlepage/:id" element={<SinglePage />} />
            <Route path="/culture" element={<Culture />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
