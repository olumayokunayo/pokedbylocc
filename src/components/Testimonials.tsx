import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Very professional, clean, and welcoming experience. I felt completely comfortable and the piercing healed perfectly. Highly recommend!",
      rating: 5,
    },
    {
      name: "Jessica T.",
      text: "Best piercer in LA! The studio is immaculate and the attention to detail is incredible. My helix piercing looks amazing.",
      rating: 5,
    },
    {
      name: "Mike R.",
      text: "I was nervous about getting my first piercing, but the professionalism and care I received made all the difference. Perfect experience.",
      rating: 5,
    },
    {
      name: "Emily K.",
      text: "Amazing work and aftercare support. Answered all my questions and made sure I knew exactly how to care for my new piercing.",
      rating: 5,
    },
    {
      name: "David L.",
      text: "Clean studio, professional setup, and excellent results. You can tell this is someone who truly cares about their craft.",
      rating: 5,
    },
    {
      name: "Amanda P.",
      text: "I have multiple piercings from here and every single one has been perfect. The only piercer I trust with my body.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gray-900 overflow-hidden"
      ref={ref}
      role="region"
      aria-label="Client Testimonials"
    >
      {/* Decorative floating particles */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute w-96 h-96 bg-amber-400/10 rounded-full top-10 left-10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
          className="absolute w-72 h-72 bg-pink-500/10 rounded-full bottom-0 right-20"
        />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-4"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          What Clients Say
        </h2>
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-8 rounded-full"></div>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Hear from clients who trusted me to deliver beautiful and safe
          piercings
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center px-4 lg:px-0">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotate: -1 }}
            animate={
              isInView ? { opacity: 1, y: 0, rotate: [-2, 0, 2, 0] } : {}
            }
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            className="group relative w-full lg:w-1/3 p-8 bg-gray-800/40 backdrop-blur-xl border border-gray-700 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            {/* Star Rating */}
            <div
              className="flex gap-1 mb-4 justify-center"
              aria-label={`${testimonial.rating} star rating`}
            >
              {[...Array(testimonial.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                  aria-hidden="true"
                >
                  <Star size={20} className="fill-amber-400 text-amber-400" />
                </motion.div>
              ))}
            </div>

            <blockquote className="text-gray-300 text-center leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </blockquote>
            <p className="text-amber-400 text-center font-semibold text-lg">
              {testimonial.name}
            </p>

            {/* Accent Glow on Hover */}
            <div className="absolute inset-0 rounded-3xl border-2 border-amber-400/0 group-hover:border-amber-400/40 transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
