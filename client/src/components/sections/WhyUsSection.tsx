import { motion } from "framer-motion";
import { Dumbbell, Sparkles, Wind, Users, Star, Zap } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Alat Lengkap",
    description: "Equipment modern dari brand ternama",
  },
  {
    icon: Sparkles,
    title: "Tempat Bersih",
    description: "Fasilitas premium dengan standar internasional",
  },
  {
    icon: Wind,
    title: "Full AC",
    description: "Sistem pendingin optimal untuk kenyamanan",
  },
  {
    icon: Users,
    title: "Trainer Profesional",
    description: "Tim berpengalaman siap membimbing Anda",
  },
  {
    icon: Star,
    title: "Rating 5.0",
    description: "Dipercaya ribuan member puas",
  },
  {
    icon: Zap,
    title: "Performa Terbaik",
    description: "Hasil nyata dengan program terstruktur",
  },
];

export default function WhyUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="why-us" className="py-16 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-3">Kenapa Pilih Lucky Gym?</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Kami berkomitmen memberikan pengalaman fitness terbaik dengan fasilitas premium
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                className="card-clean group"
              >
                <div className="mb-3 inline-block p-2 bg-primary/10 rounded group-hover:bg-primary/20 smooth-transition">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="heading-md mb-2">{feature.title}</h3>
                <p className="body-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
