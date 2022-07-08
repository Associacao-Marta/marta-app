import React, { useState } from "react";

const  LeiaMais = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 1) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "Leia mais" : " Mostre menos"}
      </span>
    </p>
  );
};

export default LeiaMais;
