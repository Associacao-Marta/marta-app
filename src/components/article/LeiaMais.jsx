import React, { useState } from 'react';

const LeiaMais = ({ children }) => {
  const smallText = children?.props?.children[0].props.children;
  const [isReadMore, setIsReadMore] = useState(false);
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
      <div style={{ marginBottom: '40px' }}>
        <p className="text">{isReadMore ? children : smallText}</p>
      </div>
      <span
        onClick={toggleReadMore}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        style={{ cursor: 'pointer' }}
        className="readOrHide">
        {isReadMore ? 'Mostre menos' : 'Leia mais'}
      </span>
    </>
  );
};

export default LeiaMais;
