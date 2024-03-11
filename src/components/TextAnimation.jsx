import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const phrases = ['Discover More!', 'Get Your Questions', 'Scroll Down'];
  const typingSpeed = 150; // Typing speed in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let intervalId;

    const typeText = () => {
      if (currentIndex < phrases.length) {
        if (currentText.length < phrases[currentIndex].length) {
          currentText = phrases[currentIndex].substring(0, currentText.length + 1);
          setText(currentText);
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            intervalId = setInterval(eraseText, typingSpeed);
          }, 2000);
        }
      } else {
        clearInterval(intervalId);
      }
    };

    const eraseText = () => {
      if (currentText.length > 0) {
        currentText = currentText.substring(0, currentText.length - 1);
        setText(currentText);
      } else {
        clearInterval(intervalId);
        currentIndex = (currentIndex + 1) % phrases.length;
        setTimeout(() => {
          intervalId = setInterval(typeText, typingSpeed/4);
        }, 1000);
      }
    };

    intervalId = setInterval(typeText, typingSpeed);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-6xl border-b-2 border-gray-700 text-teal-500 font-bold">{text}</p>
    </div>
  );
};

export default TypingAnimation;
