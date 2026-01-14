import { motion } from "framer-motion";
import { Sparkles, Circle, Star, Gem, Zap } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Circle,
      title: "Ear Piercing",
      description:
        "Classic lobes, helix, tragus, conch, and more. Precision placement for perfect symmetry.",
    },
    {
      icon: Star,
      title: "Nose Piercing",
      description:
        "Nostril and septum piercings. Clean, professional technique for beautiful results.",
    },
    {
      icon: Sparkles,
      title: "Cartilage",
      description:
        "Specialized cartilage piercings including daith, rook, and industrial piercings.",
    },
    {
      icon: Gem,
      title: "Navel",
      description:
        "Classic and custom navel piercings with premium jewelry options available.",
    },
    {
      icon: Zap,
      title: "Custom Requests",
      description:
        "Unique placements and curated looks. Let's create something special together.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-black"
      ref={ref}
      role="region"
      aria-label="Professional Piercing Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Piercing Services
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Professional piercing services tailored to your style and comfort.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-amber-400"
              >
                {/* Accent Line */}
                <span className="absolute left-0 top-0 h-full w-1 bg-amber-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-xl bg-amber-400/10 group-hover:bg-amber-400/20 transition-colors duration-300"
                      aria-hidden="true"
                    >
                      <Icon className="text-amber-400" size={26} />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            All procedures include jewelry, aftercare products, and detailed
            healing instructions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
