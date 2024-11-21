import React from "react";
import "./header.css";

const Head: React.FC = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
          <div className="logo">
            <img src="../images/logo.png" alt="Logo" />
          </div>
          <div className="ad">
            <img src="../images/headerb.png" alt="Advertisement" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
