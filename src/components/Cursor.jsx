import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverLink, setIsOverLink] = useState(false);
  const [isOverButton, setIsOverButton] = useState(false);

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });

    // Check if the cursor is over a link or a button
    const isLink = e.target.tagName.toLowerCase() === 'a';
    const isButton = e.target.tagName.toLowerCase() === 'button';
    
    setIsOverLink(isLink);
    setIsOverButton(isButton);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isOverLink || isOverButton ? '40px' : '0',
        height: isOverLink || isOverButton ? '40px' : '0',
      }}
    />
  );
};

export default Cursor;
