import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationSection() {
  const handleOpenMaps = () => {
    window.open(
      "https://www.google.com/maps/search/X3F3%2B3RP,+Cilegon",
      "_blank"
    );
  };

  const isOpen = true; // Placeholder - in real app, calculate based on current time

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Lokasi Kami</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan kami di lokasi strategis di Cilegon, mudah diakses dari mana saja
          </p>
        </motion.div>

        {/* Location Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden h-96 border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.0897474532!2d106.1578!3d-6.0235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sX3F3%2B3RP%2C%20Cilegon!2sIndonesia!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="heading-md mb-1">Alamat</h3>
                <p className="body-sm text-muted-foreground">
                  X3F3+3RP, Cilegon, Banten, Indonesia
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="heading-md mb-1">Jam Operasional</h3>
                <p className="body-sm text-muted-foreground">
                  Senin - Minggu: 05:00 - 22:00
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isOpen ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                  <span className="text-sm font-medium">
                    {isOpen ? "Buka sekarang" : "Tutup sekarang"}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="heading-md mb-1">Hubungi Kami</h3>
                <p className="body-sm text-muted-foreground">
                  0857-1014-5550
                </p>
                <p className="body-sm text-muted-foreground">
                  @luckygym_id (Instagram)
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                onClick={handleOpenMaps}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all"
              >
                Buka di Google Maps
              </motion.button>
              <motion.button
                onClick={() =>
                  window.open("https://wa.me/6285710145550", "_blank")
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all"
              >
                Chat WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
