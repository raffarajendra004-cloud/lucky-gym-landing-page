import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

interface FloatingCTAProps {
  onJoinClick: () => void;
}

export default function FloatingCTA({ onJoinClick }: FloatingCTAProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !hasScrolled) {
        setShowPopup(true);
        setHasScrolled(true);
        // Auto-hide after 5 seconds
        const timer = setTimeout(() => setShowPopup(false), 5000);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <>
      {/* Floating Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed bottom-24 right-4 md:right-6 z-40 max-w-xs"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
          >
            <div className="bg-white rounded-lg shadow-lg border-2 border-primary p-4">
              <div className="flex items-start justify-between mb-2">
                <p className="font-bold text-primary">🎉 Diskon Member Baru!</p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="p-1 hover:bg-card rounded"
                >
                  <X size={16} />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Daftar hari ini dan dapatkan free consultation dengan trainer profesional kami!
              </p>
              <p className="text-xs font-bold text-orange-600 mb-3">
                ⚡ Slot terbatas hari ini!
              </p>
              <button
                onClick={() => {
                  setShowPopup(false);
                  onJoinClick();
                }}
                className="w-full px-3 py-2 bg-primary text-primary-foreground font-bold rounded text-sm hover:shadow-md transition-all"
              >
                Daftar Sekarang
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/6285710145550"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Sticky Join Button */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-border p-3 md:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          onClick={onJoinClick}
          className="w-full px-4 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Join Now - Daftar Member
        </motion.button>
      </motion.div>
    </>
  );
}
