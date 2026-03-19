import { motion } from "framer-motion";
import { Check } from "lucide-react";

const programs = [
  {
    name: "Gym Reguler",
    price: "299.000",
    features: ["Akses 24/7", "Semua equipment", "Locker & shower", "WiFi unlimited"],
    badge: null,
  },
  {
    name: "Personal Trainer",
    price: "799.000",
    features: ["Gym included", "4x sesi training", "Program custom", "Nutrition plan"],
    badge: "Recommended",
  },
  {
    name: "Pilates Class",
    price: "399.000",
    features: ["Unlimited class", "Small groups", "Equipment premium", "Flexible schedule"],
    badge: null,
  },
];

export default function ProgramsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-3">Program & Pricing</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`card-clean relative ${
                program.badge === "Recommended" ? "ring-2 ring-primary md:scale-105" : ""
              }`}
            >
              {program.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
                    {program.badge}
                  </span>
                </div>
              )}

              <h3 className="heading-md mb-1">{program.name}</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold text-primary">Rp {program.price}</span>
                <span className="text-muted-foreground text-sm">/bulan</span>
              </div>

              <div className="space-y-2 mb-6">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="body-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2 rounded font-bold smooth-transition ${
                  program.badge === "Recommended"
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                Pilih Paket
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
