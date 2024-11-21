import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header.js";
import Footer from "./components/common/footer/Footer.js";
import Homepages from "./components/home/Homepages.js";
import SinglePage from "./components/singlePage/SinglePage.js";
import Culture from "./components/culture/Culture.js";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "./App.css";

const App = () => {
  return (
    <>
    <div className="user-info">
            <UserButton />
          </div>
      <Router>
        <Header />
        <SignedOut>
          <div className="auth-container">
            <SignInButton />
            <p>Please sign in to access the content.</p>
          </div>
        </SignedOut>
        <SignedIn>
          <Routes>
            <Route path="/" element={<Homepages />} />
            <Route path="/singlepage/:id" element={<SinglePage />} />
            <Route path="/culture" element={<Culture />} />
          </Routes>
          
        </SignedIn>
        <Footer />
      </Router>
    </>
  );
};

export default App;
