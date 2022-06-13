import React, { useState } from "react";
import "../App.css";

const LeiaMais = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 1) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...leia mais" : " mostre menos"}
      </span>
    </p>
  );
};

export default LeiaMais;
