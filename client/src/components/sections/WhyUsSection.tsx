import { motion } from "framer-motion";
import { Dumbbell, Sparkles, Wind, Users, Star, Zap } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Alat Lengkap & Terbaru",
    description: "Equipment modern dari brand ternama untuk semua jenis latihan",
  },
  {
    icon: Sparkles,
    title: "Tempat Bersih & Nyaman",
    description: "Fasilitas premium dengan standar kebersihan internasional",
  },
  {
    icon: Wind,
    title: "Full AC (Tidak Sumpek)",
    description: "Sistem pendingin optimal untuk kenyamanan maksimal",
  },
  {
    icon: Users,
    title: "Trainer Ramah & Profesional",
    description: "Tim berpengalaman siap membimbing perjalanan fitness Anda",
  },
  {
    icon: Star,
    title: "Rating 5.0 ⭐",
    description: "Dipercaya oleh ribuan member puas di Cilegon",
  },
  {
    icon: Zap,
    title: "Performa Terbaik",
    description: "Hasil nyata dengan program terstruktur dan support penuh",
  },
];

export default function WhyUsSection() {
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
    <section id="why-us" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Kenapa Pilih Lucky Gym?</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Kami berkomitmen memberikan pengalaman fitness terbaik dengan fasilitas premium dan layanan profesional
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 glow-yellow-hover"
              >
                {/* Icon */}
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="heading-md mb-2 text-foreground">{feature.title}</h3>

                {/* Description */}
                <p className="body-sm text-muted-foreground">{feature.description}</p>

                {/* Hover Effect */}
                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "5000+", label: "Member Aktif" },
            { number: "50+", label: "Equipment Modern" },
            { number: "20+", label: "Trainer Profesional" },
            { number: "5.0", label: "Rating Google" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="heading-lg text-primary mb-2">{stat.number}</div>
              <div className="body-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
