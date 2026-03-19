import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663450912103/F75UxNeyShVVQ8k2yXoHiB/lucky-gym-hero-ArbEsYPfxRRZ7Md2MgHfwH.webp";

export default function HeroSection() {
  const handleScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Lucky Gym Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container flex flex-col items-center justify-center text-center gap-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="heading-display text-white"
        >
          Train Like a Pro at Lucky Gym
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="body-lg text-white/90 max-w-2xl mx-auto"
        >
          Gym paling proper di Cilegon dengan alat lengkap, nyaman, dan profesional
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 justify-center pt-2"
        >
          <motion.button
            onClick={() => handleScroll("#contact")}
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Daftar Member
          </motion.button>
          <motion.button
            onClick={() => handleScroll("#facilities")}
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lihat Fasilitas
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={28} className="text-primary" />
      </motion.div>
    </section>
  );
}
