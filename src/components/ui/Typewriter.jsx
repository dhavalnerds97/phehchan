import React, { useEffect, useState } from "react";

const TypewriterEffect = ({ words, className, cursorClassName }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const typeText = () => {
      const word = words[currentWordIndex];
      const char = word.text[currentCharIndex];

      setDisplayText((prevText) => {
        if (!isDeleting) {
          return prevText + char;
        } else {
          return prevText.slice(0, -1);
        }
      });

      if (!isDeleting) {
        if (currentCharIndex === word.text.length - 1) {
          setIsDeleting(true);
        } else {
          setCurrentCharIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        if (currentCharIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        } else {
          setCurrentCharIndex((prevIndex) => prevIndex - 1);
        }
      }
    };

    const timeoutId = setTimeout(typeText, 100);

    return () => clearTimeout(timeoutId);
  }, [currentCharIndex, currentWordIndex, isDeleting, words]);

  return (
    <div
      className={`text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center ${className}`}
    >
      {displayText}
      <span
        className={`inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 ${cursorClassName}`}
      ></span>
    </div>
  );
};

export default TypewriterEffect;
