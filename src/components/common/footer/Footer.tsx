import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container flexSB">
          {/* About Section */}
          <div className="footer-section">
            <h3>About Newsgenie</h3>
            <p>
            Newsgenie is an AI-powered news platform that provides real-time, personalized news updates. With cutting-edge technology, it offers automatic news summarization and sentiment analysis on user comments, ensuring a smarter and more engaging reading experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="contributors">
            <h3>Designed by:</h3>
            <ul>
              <li>
                Piyush Rathwe - <a href="piyush30rathwe@gmail.com">piyush30rathwe@gmail.com</a>
              </li>
              <li>
                Souhard Singh - <a href="mailto:jane.smith@example.com">jane.smith@example.com</a>
              </li>
              <li>
                Shivansh Pathak - <a href="shivanshpathak64@gmail.com">shivanshpathak64@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Legal Section */}
      <div className="legal">
        <div className="container flexSB">
          <p>Newsgenie © 2024 All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
