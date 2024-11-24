import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const handleReadMore = () => {

}

const App = () => {
  return (
    <>
      <Router>
        <div className="front">
        <Dates />
          <div className="logo">
            <img src="/src/logo1.png" alt="" />
          </div>
          
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
            path="/newscard"
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
          </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;