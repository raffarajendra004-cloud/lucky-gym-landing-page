import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Member 2 tahun",
    text: "Tempat gym paling proper di Cilegon. Nyaman, alat lengkap, staff ramah. Transformasi tubuh saya dimulai dari sini!",
    rating: 5,
  },
  {
    name: "Siti Nurhaliza",
    role: "Member 1.5 tahun",
    text: "Worth it banget, profesional dan bersih. Trainer-nya sangat membantu dan supportif. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ahmad Wijaya",
    role: "Member 6 bulan",
    text: "Fasilitas premium dengan harga terjangkau. Lokasi strategis di Cilegon. Puas dengan service dan hasilnya!",
    rating: 5,
  },
  {
    name: "Dewi Lestari",
    role: "Member 1 tahun",
    text: "Tempat yang tepat untuk memulai fitness journey. Suasana supportif dan equipment lengkap. Terima kasih Lucky Gym!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-card/50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Testimoni Member</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Dengarkan cerita sukses dari member kami yang telah merasakan transformasi luar biasa
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-background border border-border rounded-2xl p-8 md:p-12"
          >
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {Array(testimonials[current].rating)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-primary text-primary"
                  />
                ))}
            </div>

            {/* Text */}
            <p className="body-lg text-foreground mb-6 italic">
              "{testimonials[current].text}"
            </p>

            {/* Author */}
            <div>
              <p className="font-bold text-foreground">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[current].role}
              </p>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoplay(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "bg-primary w-8"
                    : "bg-muted w-2 hover:bg-muted-foreground"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "5000+", label: "Member Puas" },
            { number: "4.9", label: "Rating Google" },
            { number: "10+", label: "Tahun Berpengalaman" },
            { number: "100%", label: "Kepuasan Member" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-background border border-border"
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
