import { motion } from "framer-motion";
import { Check } from "lucide-react";

const programs = [
  {
    name: "Gym Reguler",
    price: "299.000",
    period: "/bulan",
    description: "Akses penuh ke semua fasilitas gym",
    features: [
      "Akses 24/7 ke gym",
      "Semua equipment tersedia",
      "Locker & shower gratis",
      "WiFi unlimited",
    ],
    badge: null,
  },
  {
    name: "Personal Trainer",
    price: "799.000",
    period: "/bulan",
    description: "Program personal dengan trainer berpengalaman",
    features: [
      "Gym membership included",
      "4x sesi personal training",
      "Program latihan custom",
      "Nutrition consultation",
      "Progress tracking",
    ],
    badge: "Recommended",
  },
  {
    name: "Pilates Class",
    price: "399.000",
    period: "/bulan",
    description: "Kelas pilates dengan instruktur profesional",
    features: [
      "Unlimited pilates classes",
      "Small group sessions",
      "Equipment berkualitas",
      "Flexible schedule",
      "Community support",
    ],
    badge: "Best Seller",
  },
];

export default function ProgramsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Program & Pricing</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan fitness Anda
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-2xl p-8 border transition-all duration-300 glow-yellow-hover ${
                program.badge === "Recommended"
                  ? "border-primary bg-card ring-2 ring-primary/20 md:scale-105"
                  : "border-border bg-card"
              }`}
            >
              {/* Badge */}
              {program.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                    {program.badge}
                  </span>
                </div>
              )}

              {/* Program Name */}
              <h3 className="heading-md mb-2">{program.name}</h3>
              <p className="body-sm text-muted-foreground mb-6">{program.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">
                    Rp {program.price}
                  </span>
                  <span className="text-muted-foreground">{program.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="body-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                  program.badge === "Recommended"
                    ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40"
                    : "bg-card border border-primary text-primary hover:bg-primary/10"
                }`}
              >
                Pilih Paket
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="body-lg text-muted-foreground mb-6">
            Tidak yakin paket mana yang cocok? Hubungi kami untuk konsultasi gratis!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-all duration-300"
          >
            Konsultasi Gratis
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
