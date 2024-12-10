
import React, { useState, useEffect } from 'react';

function TypingText() {
  const text = "Venha estudar na Fatec!";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prevText => prevText + text[index]);
        setIndex(prevIndex => prevIndex + 1);
      } else {
        setDisplayText('');
        setIndex(0);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [index]);

  return <div>{displayText}</div>;
}

export default TypingText;

