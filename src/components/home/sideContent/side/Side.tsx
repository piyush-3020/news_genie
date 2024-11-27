import React, { useState } from "react";
import "./side.css";
import Heading from "../../../common/heading/Heading";
import { gallery } from "../../../../dummyData";
import Tpost from "../Tpost/Tpost";
import SocialMedia from "../social/SocialMedia";
import { useNavigate } from "react-router-dom";

const Side = () => {
  const navigate = useNavigate();
  const categories = ["Business", "Politics", "Sports", "Fun", "Technology", "Science", "Health", "Education"];
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Handle form submission for email subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      // Handle the actual subscription logic here
      console.log("Subscribed with email:", email);
    }
  };

  return (
    <>
      <Heading title="Stay Connected" />
      <SocialMedia />

      <Heading title="Subscribe" />

      <section className="subscribe">
        <h1 className="title">Subscribe to our New Stories</h1>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Email Address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-paper-plane"></i> SUBMIT
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </section>

      <Tpost />

      <section className="catgorys">
        <Heading title="Categories" />
        {categories.map((category, index) => (
          <div
            className="category category1"
            key={index} // Unique key for each category
            onClick={() => navigate(`/${category.toLowerCase()}`)}
          >
            <span>{category}</span>
          </div>
        ))}
      </section>

      <section className="gallery">
        <Heading title="Gallery" />
        <div className="gallery-column">
          {gallery.map((val, index) => (
            <div className="img" key={index}>
              <img src={val.cover} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Side;
