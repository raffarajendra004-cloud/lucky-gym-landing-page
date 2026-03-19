import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    text: "Tempat gym paling proper di Cilegon. Nyaman, alat lengkap, staff ramah!",
    rating: 5,
  },
  {
    name: "Siti Nurhaliza",
    text: "Worth it banget, profesional dan bersih. Trainer sangat membantu!",
    rating: 5,
  },
  {
    name: "Ahmad Wijaya",
    text: "Fasilitas premium dengan harga terjangkau. Sangat puas!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 bg-card">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-3">Testimoni Member</h2>
          <p className="body-lg text-muted-foreground">Dengarkan cerita sukses dari member kami</p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="card-clean text-center"
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array(testimonials[current].rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
            </div>
            <p className="body-lg mb-4 italic text-foreground">
              "{testimonials[current].text}"
            </p>
            <p className="font-bold">{testimonials[current].name}</p>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-primary text-primary-foreground hover:shadow-md smooth-transition"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-primary text-primary-foreground hover:shadow-md smooth-transition"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full smooth-transition ${
                  index === current ? "bg-primary w-6" : "bg-muted w-2"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
