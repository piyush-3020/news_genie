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
                <Link to="/culture">Business</Link>
              </li>
              <li>
                <Link to="/politics">Politics</Link>
              </li>
              <li>
                <Link to="/memes">Sports</Link>
              </li>
              <li>
                <Link to="/sports">Entertainment</Link>
              </li>
              <li>
                <Link to="/boxed">Technology</Link>
              </li>
              <li>
                <Link to="/reviews">Science</Link>
              </li>
              <li>
                <Link to="/reviews">Health</Link>
              </li>
              <li>
                <Link to="/reviews">Education</Link>
              </li>
              <li>
                <Link to="/reviews">Global</Link>
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
