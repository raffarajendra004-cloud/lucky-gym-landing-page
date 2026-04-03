import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    package: "gym-reguler",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Terima kasih! Kami akan menghubungi Anda segera.");
      setFormData({ name: "", phone: "", package: "gym-reguler" });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 bg-card">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-3">Daftar Sekarang</h2>
          <p className="body-lg text-muted-foreground">Mulai transformasi fitness Anda hari ini</p>
        </motion.div>

        {/* Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                required
                className="w-full px-4 py-2.5 border border-border rounded smooth-transition focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">No HP</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0857-1014-5550"
                required
                className="w-full px-4 py-2.5 border border-border rounded smooth-transition focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Paket</label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-border rounded smooth-transition focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="gym-reguler">Gym Reguler</option>
                <option value="personal-trainer">Personal Trainer</option>
                <option value="pilates-class">Pilates Class</option>
              </select>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Mengirim..." : "Daftar Sekarang"}
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/6285710145550"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="block p-4 rounded border border-border hover:border-primary hover:bg-primary/5 smooth-transition"
            >
              <p className="font-bold mb-1">Chat WhatsApp</p>
              <p className="body-sm text-muted-foreground">0857-1014-5550</p>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+6285710145550"
              whileHover={{ scale: 1.02 }}
              className="block p-4 rounded border border-border hover:border-primary hover:bg-primary/5 smooth-transition"
            >
              <p className="font-bold mb-1">Telepon</p>
              <p className="body-sm text-muted-foreground">0857-1014-5550</p>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com/gym_id"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="block p-4 rounded border border-border hover:border-primary hover:bg-primary/5 smooth-transition"
            >
              <p className="font-bold mb-1">Instagram</p>
              <p className="body-sm text-muted-foreground">@gym_id</p>
            </motion.a>

            {/* Info Box */}
            <div className="p-4 rounded bg-primary/10 border border-primary/20">
              <p className="body-sm">
                <span className="font-bold">Slot Terbatas!</span> Daftar sekarang dan dapatkan konsultasi gratis dengan trainer kami.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
