'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TypewriterEffect({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.text.length) {
          // Still typing
          setCurrentText(currentWord.text.slice(0, currentText.length + 1));
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText.length > 0) {
          // Deleting
          setCurrentText(currentWord.text.slice(0, currentText.length - 1));
        } else {
          // Move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length); // Loop back to start
        }
      }
    }, isDeleting ? 50 : 100); // Faster deletion speed

    return () => clearTimeout(timeout);
  }, [currentText, currentWord.text, currentWordIndex, words.length, isDeleting]);

  return (
    <div className={`inline-block ${className}`}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: idx === currentWordIndex ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={`${word.className} ${idx === currentWordIndex ? 'inline-block' : 'hidden'}`}
        >
          {idx === currentWordIndex ? currentText : ''}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block ml-1"
          >
            |
          </motion.span>
        </motion.span>
      ))}
      <span className="inline-block">&nbsp;</span>
    </div>
  );
} 