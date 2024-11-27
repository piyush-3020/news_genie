import React from "react";
import "./heading.css";

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className="heading">
      <h6>{title}</h6>
    </div>
  );
};

export default Heading;
