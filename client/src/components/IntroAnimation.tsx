import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2500); // 2.5 seconds total

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-b from-black via-black to-primary/10 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.9 }}
        >
          {/* Logo Container */}
          <motion.div
            className="relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Logo */}
            <motion.div
              className="relative w-32 h-32 bg-gradient-to-br from-primary to-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/50"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-center">
                <motion.div
                  className="text-5xl font-black text-primary-foreground"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  LG
                </motion.div>
                <motion.div
                  className="text-xs font-bold text-primary-foreground mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  LUCKY GYM
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="absolute bottom-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-primary font-bold text-lg">Train Like a Pro</p>
            <p className="text-white/60 text-sm mt-1">Cilegon's Premium Gym</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
