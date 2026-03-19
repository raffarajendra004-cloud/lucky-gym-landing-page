import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const trainers = [
  {
    name: "Reza Pratama",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    certified: true,
  },
  {
    name: "Eka Putri",
    specialty: "Pilates & Flexibility",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    certified: true,
  },
  {
    name: "Budi Santoso",
    specialty: "Cardio & HIIT",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    certified: true,
  },
];

export default function TrainersSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-3">Tim Trainer Profesional</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Trainer bersertifikat siap membimbing transformasi fitness Anda
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-80">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="heading-md mb-1">{trainer.name}</h3>
              <p className="body-sm text-muted-foreground mb-3">{trainer.specialty}</p>
              {trainer.certified && (
                <Badge className="bg-primary text-primary-foreground">
                  ✓ Certified
                </Badge>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
