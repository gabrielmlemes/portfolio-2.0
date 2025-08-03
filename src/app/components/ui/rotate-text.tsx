"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  motion,
  AnimatePresence,
  useAnimate,
  Transition,
  VariantLabels,
  Target,
  TargetAndTransition,
} from "framer-motion";

// Função utilitária para classes condicionais
function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
  rotationInterval?: number;
  transition?: Transition;
  initial?: boolean | Target | VariantLabels;
  animate?: boolean | VariantLabels | TargetAndTransition;
  exit?: Target | VariantLabels;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  mainClassName = "",
  splitLevelClassName = "",
  elementLevelClassName = "",
  rotationInterval = 2000,
  transition = { type: "spring", damping: 25, stiffness: 300 },
  initial = { y: "100%", opacity: 0 },
  animate = { y: 0, opacity: 1 },
  exit = { y: "-120%", opacity: 0 },
  staggerDuration = 0.025,
  staggerFrom = "first",
}) => {
  const [index, setIndex] = useState(0);
  const [scope, animateWidth] = useAnimate();
  const [width, setWidth] = useState<number | "auto">("auto");

  const measurementRef = useRef<HTMLSpanElement>(null);

  const updateWidth = useCallback(() => {
    if (measurementRef.current) {
      setWidth(measurementRef.current.offsetWidth);
    }
  }, []);

  const characters = useMemo(() => {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(texts[index]), (s) => s.segment);
  }, [index, texts]);

  const getStaggerDelay = useCallback(
    (charIndex: number): number => {
      const total = characters.length;
      if (staggerFrom === "first") return charIndex * staggerDuration;
      if (staggerFrom === "last")
        return (total - 1 - charIndex) * staggerDuration;
      if (staggerFrom === "center") {
        const center = Math.floor(total / 2);
        return Math.abs(center - charIndex) * staggerDuration;
      }
      if (staggerFrom === "random") {
        const randomIndex = Math.floor(Math.random() * total);
        return Math.abs(randomIndex - charIndex) * staggerDuration;
      }
      return Math.abs((staggerFrom as number) - charIndex) * staggerDuration;
    },
    [staggerFrom, staggerDuration, characters.length]
  );

  useEffect(() => {
    updateWidth();
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts.length, rotationInterval, updateWidth]);

  useEffect(() => {
    if (scope.current) {
      animateWidth(
        scope.current,
        { width },
        { duration: 0.5, ease: "easeInOut" }
      );
    }
  }, [width, animateWidth, scope]);

  useEffect(() => {
    updateWidth();
  }, [index, updateWidth]);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        ref={scope}
        style={{ width, willChange: "width" }}
        className={cn(
          "relative flex items-center justify-center overflow-hidden",
          mainClassName
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={texts[index]}
            className={cn("flex", splitLevelClassName)}
          >
            {characters.map((char, charIndex) => (
              <motion.span
                key={charIndex}
                initial={initial}
                animate={animate}
                exit={exit}
                transition={{
                  ...transition,
                  delay: getStaggerDelay(charIndex),
                }}
                className={cn("inline-block", elementLevelClassName)}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Elemento invisível para medir a largura */}
      <span
        ref={measurementRef}
        className={cn(
          "absolute invisible whitespace-nowrap",
          mainClassName,
          splitLevelClassName
        )}
        aria-hidden="true"
      >
        {texts[index]}
      </span>
    </div>
  );
};

export default RotatingText;

