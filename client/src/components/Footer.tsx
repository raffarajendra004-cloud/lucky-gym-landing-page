import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Quick Links": [
      { label: "Home", href: "#home" },
      { label: "Fasilitas", href: "#facilities" },
      { label: "Program", href: "#programs" },
      { label: "Testimoni", href: "#testimonials" },
    ],
    "Informasi": [
      { label: "Tentang Kami", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Syarat & Ketentuan", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/luckygym_id", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">LG</span>
              </div>
              <span className="font-bold text-lg">Lucky Gym</span>
            </div>
            <p className="body-sm text-muted-foreground">
              Gym premium di Cilegon dengan fasilitas lengkap dan trainer profesional untuk transformasi fitness Anda.
            </p>
            <div className="flex gap-3">
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
                    className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-bold text-foreground">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="body-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-bold text-foreground">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-primary flex-shrink-0 mt-1" />
                <div className="body-sm text-muted-foreground">
                  <p>0857-1014-5550</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-primary flex-shrink-0 mt-1" />
                <div className="body-sm text-muted-foreground">
                  <p>info@luckygym.id</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                <div className="body-sm text-muted-foreground">
                  <p>X3F3+3RP, Cilegon, Banten</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
        >
          <p className="body-sm text-muted-foreground">
            &copy; {currentYear} Lucky Gym Cilegon. All rights reserved.
          </p>
          <p className="body-sm text-muted-foreground">
            Made with <span className="text-primary">❤</span> for fitness enthusiasts
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
