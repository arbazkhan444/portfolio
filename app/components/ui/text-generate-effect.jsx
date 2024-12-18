"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        y: 0,
      },
      {
        duration: 1.5,
        delay: stagger(0.1),
        ease: [0.33, 1, 0.68, 1],
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="flex flex-wrap">
        {wordsArray.map((word, idx) => {
          let customClass = "";
          if (word.includes("Arbaz")) {
            customClass = "text-pink-500 !important";
          } else if (word.includes("Developer")) {
            customClass = "text-[#16f2b3] !important";
          }

          return (
            <div key={word + idx} className="whitespace-pre">
              <motion.span
                className={cn(
                  "dark:text-white text-black opacity-0 translate-y-[-20px] inline-block",
                  customClass
                )}
                style={{ color: customClass ? customClass.includes('pink') ? '#ec4899' : '#16f2b3' : '' }}
              >
                {word}
              </motion.span>
              {/* Add space after each word except the last one */}
              {idx !== wordsArray.length - 1 && (
                <motion.span
                  className="dark:text-white text-black opacity-0 translate-y-[-20px] inline-block"
                >
                  {" "}
                </motion.span>
              )}
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-3xl lg:text-5xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
