import { motion } from "framer-motion";

const facilities = [
  {
    title: "Mesin Gym Modern",
    description: "Equipment terkini dari brand internasional",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450912103/F75UxNeyShVVQ8k2yXoHiB/lucky-gym-facilities-1-HbwF5qzDgfAtMfabyuqPEH.webp",
  },
  {
    title: "Area Cardio Luas",
    description: "Treadmill, elliptical, dan bike berkualitas premium",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450912103/F75UxNeyShVVQ8k2yXoHiB/lucky-gym-facilities-2-CZ6FzbPhPhizbWSeTZ5aqo.webp",
  },
  {
    title: "Pilates Studio",
    description: "Studio khusus dengan equipment pilates profesional",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450912103/F75UxNeyShVVQ8k2yXoHiB/lucky-gym-facilities-3-enbGJLKL3tt7QGiqg9pwvQ.webp",
  },
];

export default function FacilitiesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="facilities" className="py-20 bg-card/50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Fasilitas Premium</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan fasilitas lengkap dengan standar gym internasional untuk mendukung perjalanan fitness Anda
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
            >
              {/* Image */}
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="heading-md mb-2">{facility.title}</h3>
                <p className="body-sm text-gray-200">{facility.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            "Free Weights Area",
            "Locker & Shower",
            "WiFi Gratis",
            "Parking Luas",
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-background border border-border text-center hover:border-primary transition-colors"
            >
              <p className="font-semibold text-foreground">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
