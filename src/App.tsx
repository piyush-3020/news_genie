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
            <Route path="/newscard" element={<NewsCard
        imageUrl="https://via.placeholder.com/150"
        title="Breaking News: React and TypeScript"
        description="React and TypeScript are a powerful combination for modern web development.Dailyhunt, earlier called Newshunt, was created as a Symbian app in 2009 by two ex-Nokia employees Umesh Kulkarni and Chandrashekhar Sohoni. Later in 2011, Newshunt became available on the Android platform. It was by that time that Virendra Gupta, founder of Verse acquired the application.Virendra Gupta, better known as Viru, had started Verse in 2007 as a value-added service (VAS) company.[2] In 2011."
        Source="Hindustan Times"
        onReadMore={handleReadMore} // Required function
      />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
