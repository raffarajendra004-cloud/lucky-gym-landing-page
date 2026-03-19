import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="py-16 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-3">Lokasi Kami</h2>
          <p className="body-lg text-muted-foreground">Mudah diakses di Cilegon</p>
        </motion.div>

        {/* Location Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden h-80 border border-border"
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
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="heading-md mb-1">Alamat</h3>
                <p className="body-sm text-muted-foreground">X3F3+3RP, Cilegon, Banten</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="heading-md mb-1">Jam Operasional</h3>
                <p className="body-sm text-muted-foreground">Senin - Minggu: 05:00 - 22:00</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="heading-md mb-1">Hubungi Kami</h3>
                <p className="body-sm text-muted-foreground">0857-1014-5550</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <motion.button
                onClick={() => window.open("https://www.google.com/maps/search/X3F3%2B3RP,+Cilegon", "_blank")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Buka Maps
              </motion.button>
              <motion.button
                onClick={() => window.open("https://wa.me/6285710145550", "_blank")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
