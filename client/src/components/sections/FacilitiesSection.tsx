import { motion } from "framer-motion";

const facilities = [
  {
    title: "Mesin Gym Modern",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450912103/F75UxNeyShVVQ8k2yXoHiB/lucky-gym-facilities-1-HbwF5qzDgfAtMfabyuqPEH.webp",
  },
  {
    title: "Area Cardio",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450912103/F75UxNeyShVVQ8k2yXoHiB/lucky-gym-facilities-2-CZ6FzbPhPhizbWSeTZ5aqo.webp",
  },
  {
    title: "Pilates Studio",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450912103/F75UxNeyShVVQ8k2yXoHiB/lucky-gym-facilities-3-enbGJLKL3tt7QGiqg9pwvQ.webp",
  },
];

export default function FacilitiesSection() {
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
    <section id="facilities" className="py-16 bg-card">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-3">Fasilitas Premium</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Lengkap dengan standar gym internasional
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg h-72 cursor-pointer"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover smooth-transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 smooth-transition flex items-end p-4">
                <h3 className="heading-md text-white">{facility.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
