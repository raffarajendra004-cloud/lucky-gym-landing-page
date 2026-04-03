import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Fasilitas", href: "#facilities" },
    { label: "Program", href: "#programs" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Lokasi", href: "#location" },
  ];

  const handleScroll = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-9 h-9 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">LG</span>
          </div>
          <span className="font-bold text-base hidden sm:inline">GYM</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => handleScroll(item.href)}
              className="text-sm font-medium text-foreground hover:text-primary smooth-transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => handleScroll("#contact")}
          className="hidden md:block px-5 py-2 bg-primary text-primary-foreground font-bold rounded smooth-transition hover:shadow-md active:scale-95"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Now
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white border-b border-border"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                className="text-left text-foreground hover:text-primary smooth-transition py-2 text-sm"
                whileHover={{ x: 4 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleScroll("#contact")}
              className="w-full px-5 py-2 bg-primary text-primary-foreground font-bold rounded smooth-transition mt-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
