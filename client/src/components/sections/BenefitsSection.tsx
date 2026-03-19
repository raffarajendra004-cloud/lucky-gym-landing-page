import { motion } from "framer-motion";
import { Heart, Zap, Smile } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Lebih Sehat",
    description: "Tubuh yang lebih fit, energi yang meningkat, dan kesehatan optimal",
  },
  {
    icon: Zap,
    title: "Lebih Kuat",
    description: "Otot yang lebih kuat, stamina meningkat, performa maksimal",
  },
  {
    icon: Smile,
    title: "Lebih Percaya Diri",
    description: "Penampilan yang lebih baik, mental yang lebih positif, hidup lebih bermakna",
  },
];

export default function BenefitsSection() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-3">Apa yang Kamu Dapat?</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Transformasi nyata dimulai dari komitmen hari ini
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-white rounded-lg border border-border hover:border-primary transition-all duration-300"
              >
                <motion.div
                  className="mb-4 inline-block p-3 bg-primary/10 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="heading-md mb-2">{benefit.title}</h3>
                <p className="body-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
