import { useState } from "react";
import "./header.css";  // Ensure the CSS is in the correct location
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState<boolean>(false); // Type state explicitly as boolean

  return (
    <>
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Business">Business</Link>
              </li>
              <li>
                <Link to="/Politics">Politics</Link>
              </li>
              <li>
                <Link to="/Sports">Sports</Link>
              </li>
              <li>
                <Link to="/Entertainment">Entertainment</Link>
              </li>
              <li>
                <Link to="/Technology">Technology</Link>
              </li>
              <li>
                <Link to="/Science">Science</Link>
              </li>
              <li>
                <Link to="/Health">Health</Link>
              </li>
              <li>
                <Link to="/Education">Education</Link>
              </li>
              <li>
                <Link to="/Global">Global</Link>
              </li>
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
