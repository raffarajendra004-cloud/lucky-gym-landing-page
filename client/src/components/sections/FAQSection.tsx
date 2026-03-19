import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Berapa harga keanggotaan member?",
    answer: "Kami menawarkan 3 paket: Gym Reguler (Rp 299.000/bulan), Personal Trainer (Rp 799.000/bulan), dan Pilates Class (Rp 399.000/bulan). Semua paket include akses fasilitas lengkap.",
  },
  {
    question: "Apakah ada trainer profesional?",
    answer: "Ya, kami memiliki tim trainer bersertifikat yang siap membantu Anda mencapai target fitness. Setiap member baru mendapat free consultation dengan trainer.",
  },
  {
    question: "Apakah ada kelas pilates?",
    answer: "Ya, kami menyediakan kelas pilates dengan instruktur profesional. Kelas tersedia setiap hari dengan berbagai jadwal sesuai kebutuhan Anda.",
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer: "Cukup klik tombol 'Daftar Member', pilih paket yang sesuai, isi data pribadi Anda, dan lakukan pembayaran. Anda bisa langsung mulai berlatih!",
  },
  {
    question: "Apakah ada kontrak jangka panjang?",
    answer: "Tidak ada kontrak jangka panjang yang mengikat. Anda bisa membatalkan kapan saja tanpa penalti.",
  },
  {
    question: "Apa saja fasilitas yang tersedia?",
    answer: "Kami memiliki equipment modern, area cardio lengkap, pilates studio, locker room, shower facilities, WiFi unlimited, dan AC penuh.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-3">Pertanyaan Umum</h2>
          <p className="body-lg text-muted-foreground">
            Temukan jawaban atas pertanyaan Anda tentang Lucky Gym
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-border rounded-lg overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-card transition-colors duration-200"
                whileHover={{ backgroundColor: "#f5f5f5" }}
              >
                <span className="text-left font-semibold text-foreground">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-primary flex-shrink-0" />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-card/50"
              >
                <p className="px-6 py-4 body-sm text-muted-foreground">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
