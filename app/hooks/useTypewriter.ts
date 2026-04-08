"use client";

import { useState, useEffect } from "react";

/**
 * Typewriter effect hook.
 * Cycles through an array of words with typing/deleting animation.
 *
 * @param words - Array of strings to cycle through
 * @param speed - Typing speed in ms per character
 * @param pause - Pause duration in ms before deleting
 */
export function useTypewriter(
  words: string[],
  speed = 100,
  pause = 2000
): string {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text === current) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, speed, pause]);

  return text;
}
