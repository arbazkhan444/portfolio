"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setCurrentWordIndex(0);
    setCurrentText("");
    setIsTyping(true);
    setIsPaused(false);
  }, [words]);

  useEffect(() => {
    let timeout;
    
    if (isTyping && !isPaused) {
      if (currentText.length < words[currentWordIndex].text.length) {
        timeout = setTimeout(() => {
          setCurrentText(words[currentWordIndex].text.slice(0, currentText.length + 1));
        }, 100);
      } else {
        setIsPaused(true);
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, 1500);
      }
    } else if (!isTyping && !isPaused) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
        setIsPaused(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentWordIndex, isPaused, words]);

  // Debug log to check word cycling
  useEffect(() => {
    console.log('Current word:', words[currentWordIndex].text);
  }, [currentWordIndex, words]);

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
            "inline-block ml-1 w-[4px] h-4 md:h-6 lg:h-8 bg-blue-500",
            cursorClassName
          )}
        />
      </div>
    </div>
  );
};