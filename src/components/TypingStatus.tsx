import { useState, useEffect } from 'react';

interface TypingStatusProps {
  verbs: string[];
  subject: string;
}

export function TypingStatus({ verbs, subject }: TypingStatusProps) {
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  const colors = [
    'text-primary',
    'text-purple-500',
    'text-green-500',
    'text-yellow-500',
    'text-pink-500',
    'text-white',
    'text-indigo-500',
  ];

  const currentVerb = verbs[currentVerbIndex];
  const fullText = `${currentVerb} ${subject}`;
  const currentColor = colors[currentVerbIndex % colors.length];

  useEffect(() => {
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (isTyping) {
      if (displayText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Pause at the end before erasing
        const pauseTimeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(pauseTimeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to next verb
        const timeout = setTimeout(() => {
          setCurrentVerbIndex((prev) => (prev + 1) % verbs.length);
          setIsTyping(true);
        }, 0);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isTyping, fullText, verbs.length]);

  return (
    <span className={`${currentColor} transition-colors duration-500`}>
      {displayText}
      <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        _
      </span>
    </span>
  );
}
