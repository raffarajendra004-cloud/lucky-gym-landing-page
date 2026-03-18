import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    package: "gym-reguler",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Terima kasih! Kami akan menghubungi Anda segera.");
      setFormData({ name: "", phone: "", package: "gym-reguler", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const message = `Halo Lucky Gym, saya ingin mendaftar membership. Nama: ${formData.name || "Nama saya"}, No HP: ${formData.phone || "Nomor saya"}`;
    window.open(
      `https://wa.me/6285710145550?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Daftar Sekarang</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Jangan tunggu lagi! Mulai transformasi fitness Anda hari ini dengan Lucky Gym
          </p>
        </motion.div>

        {/* Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama Anda"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold mb-2">No HP</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0857-1014-5550"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            {/* Package */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Pilih Paket
              </label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="gym-reguler">Gym Reguler</option>
                <option value="personal-trainer">Personal Trainer</option>
                <option value="pilates-class">Pilates Class</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">Pesan</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tulis pesan atau pertanyaan Anda..."
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Mengirim..." : "Daftar Sekarang"}
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="heading-md">Hubungi Kami Langsung</h3>

              {/* WhatsApp */}
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="flex-shrink-0">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Chat via WhatsApp</p>
                  <p className="text-sm text-muted-foreground">
                    0857-1014-5550
                  </p>
                </div>
              </motion.button>

              {/* Phone */}
              <a
                href="tel:+6285710145550"
                className="w-full flex items-center gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">📞</span>
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Telepon</p>
                  <p className="text-sm text-muted-foreground">
                    0857-1014-5550
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/luckygym_id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">📱</span>
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Instagram</p>
                  <p className="text-sm text-muted-foreground">@luckygym_id</p>
                </div>
              </a>
            </div>

            {/* Info Box */}
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
              <p className="body-sm text-foreground">
                <span className="font-bold">Slot Terbatas!</span> Daftar sekarang
                dan dapatkan konsultasi gratis dengan trainer kami untuk
                merancang program fitness yang sempurna untuk Anda.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
