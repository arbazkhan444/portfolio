"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/utils/cn";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  typingSpeed = 100,
  pauseDuration = 1500,
  loop = true
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex].text;

    if (isTyping) {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    } else if (currentWordIndex < words.length - 1 || loop) {
      const timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        setIsTyping(true);
      }, pauseDuration);

      return () => clearTimeout(timeout);
    }
  }, [currentText, typingSpeed, words, currentWordIndex, isTyping, loop, pauseDuration]);

  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      <div className="flex items-center">
        <span className={cn("", words[currentWordIndex].className)}>
          {currentText}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block ml-1 w-[4px] h-4 md:h-6 lg:h-8",
            words[currentWordIndex].className, // Apply the same className as the text
            cursorClassName
          )}
          style={{
            backgroundColor: 'currentColor' // This will make the background color match the text color
          }}
        />
      </div>
    </div>
  );
};