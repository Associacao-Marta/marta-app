import React, { useState } from 'react';

const LeiaMais = ({ children }) => {
  const smallText = children[0]?.props?.children[0];
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleReadMore();
    }
  };

  return (
    <>
      <p className="text">{isReadMore ? children : smallText}</p>
      <span
        onClick={toggleReadMore}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        style={{ marginTop: '20px', cursor: 'pointer' }}
        className="read-or-hide">
        {isReadMore ? 'Mostre menos' : 'Leia mais'}
      </span>
    </>
  );
};

export default LeiaMais;
