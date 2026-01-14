import { motion } from "framer-motion";
import { Shield, Sparkles, Heart } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const badges = [
    {
      icon: Shield,
      title: "Licensed & Certified",
      description:
        "Fully licensed professional body piercer with industry certifications.",
    },
    {
      icon: Sparkles,
      title: "Sterile Equipment",
      description:
        "Hospital-grade sterilization for every piercing procedure ensuring safe piercings.",
    },
    {
      icon: Heart,
      title: "Aftercare Provided",
      description:
        "Comprehensive guidance and aftercare to ensure proper healing of your piercing.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gray-900"
      ref={ref}
      aria-label="About Our Professional Body Piercing Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Your Safety, My Priority
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With over 5 years of experience as a{" "}
            <strong>professional body piercer</strong>, I provide safe, precise,
            and stylish piercings that clients love. All procedures follow
            strict hygiene standards and use licensed, certified practices.
          </p>
        </motion.header>

        {/* Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.article
                key={badge.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-b from-gray-800/60 to-gray-900/80 
               backdrop-blur-xl border border-gray-700/60 rounded-3xl 
               p-10 text-center overflow-hidden transition-all duration-300"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="inline-flex items-center justify-center w-16 h-16 
                   bg-amber-400/10 rounded-2xl mb-8 mx-auto"
                >
                  <Icon
                    className="text-amber-400"
                    size={32}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Text */}
                <header>
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">
                    {badge.title}
                  </h3>
                </header>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {badge.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
