import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/common/header/Header.js";
import Footer from "./components/common/footer/Footer.js";
import Homepages from "./components/home/Homepages.js";
import SinglePage from "./components/singlePage/SinglePage.js";
import NewsCard from "./components/culture/NewsCard.js";
import "./App.css";
import Dates from "./components/date/Dates.js";
import {
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Politics from "./components/culture/Politics.js";
import Sports from "./components/culture/Sports.js";
import Entertainment from "./components/culture/Entertainment.js";
import Science from "./components/culture/Science.js";
import Technology from "./components/culture/Technology.js";
import Education from "./components/culture/Education.js";
import Global from "./components/culture/Global.js";
import Health from "./components/culture/Health.js";
import { useEffect, useState } from "react";
import OneCard from "./components/home/hero/OneCard.js";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (options: { pageLanguage: string }, elementId: string) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

const App = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500); // Duration matches the CSS animation
  };

  useEffect(() => {
    // Declare the callback function on the window object
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_element"
      );
    };
    
  
    const addGoogleTranslateScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.type = "text/javascript";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };
  
    if (!window.google || !window.google.translate) {
      addGoogleTranslateScript();
    } else {
      window.googleTranslateElementInit();
    }
  }, []);
  

  return (
    <>
      <Router>
        <div className="front">
        <Dates />
        <Link to="/" onClick={handleClick}>
      <div className={`logo ${isAnimating ? "animate" : ""}`}>
        <img src="../public/images/logo1.png" alt="Logo" />
      </div>
    </Link>
          
          <div id="google_element"></div>
          
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
            <Route
            path="/business"
            element={
             <NewsCard/>
            }
          />
            <Route
            path="/Politics"
            element={
              <Politics/>
            }
          />
         <Route
            path="/Sports"
            element={
             <Sports/>
            }
          />
            <Route
            path="/Entertainment"
            element={
             <Entertainment/>
            }
          />
          <Route
            path="/Science"
            element={
            <Science/>
            }
          />
          <Route
            path="/Technology"
            element={
             <Technology/>
            }
          />
          <Route
            path="/Education"
            element={
            <Education/>
            }
          />
          <Route
            path="/Local"
            element={
             <Global/>
            }
          />
          <Route
            path="/Health"
            element={
             <Health/>
            }
          />
          <Route
            path="/OneCard"
            element={
             <OneCard/>
            }
          />
          </Routes> 
        <Footer />
      </Router>
    </>
  );
};

export default App;