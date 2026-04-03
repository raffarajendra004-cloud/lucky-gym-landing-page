import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/gym_id", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">LG</span>
              </div>
              <span className="font-bold">GYM</span>
            </div>
            <p className="body-sm text-muted-foreground">
              Gym premium di Cilegon untuk transformasi fitness Anda.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded bg-white border border-border hover:border-primary hover:bg-primary/5 smooth-transition"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="font-bold">Menu</h3>
            <ul className="space-y-2">
              {["Fasilitas", "Program", "Testimoni", "Lokasi"].map((item) => (
                <li key={item}>
                  <a href="#" className="body-sm text-muted-foreground hover:text-primary smooth-transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="font-bold">Kontak</h3>
            <ul className="space-y-2 body-sm text-muted-foreground">
              <li>0857-1014-5550</li>
              <li>X3F3+3RP, Cilegon</li>
              <li>@gym_id</li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="font-bold">Jam Operasional</h3>
            <ul className="space-y-2 body-sm text-muted-foreground">
              <li>Senin - Jumat</li>
              <li>05:00 - 22:00</li>
              <li>Sabtu - Minggu</li>
              <li>05:00 - 22:00</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-6" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center body-sm text-muted-foreground"
        >
          <p>&copy; {currentYear} GYM Cilegon. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
