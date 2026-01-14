import { motion } from "framer-motion";
import {
  ShieldCheck,
  Package,
  Droplets,
  ClipboardList,
  Thermometer,
  BadgeCheck,
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Safety = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const safetyMeasures = [
    {
      icon: Package,
      title: "Single-Use Needles",
      description:
        "Every needle is brand new, sterile, and disposed of immediately after use. No exceptions.",
    },
    {
      icon: Thermometer,
      title: "Autoclave Sterilization",
      description:
        "All reusable equipment is sterilized using hospital-grade autoclave technology.",
    },
    {
      icon: Droplets,
      title: "Antiseptic Protocols",
      description:
        "Medical-grade antiseptics and proper skin preparation for every procedure.",
    },
    {
      icon: BadgeCheck,
      title: "Premium Jewelry",
      description:
        "Implant-grade titanium and surgical steel. Hypoallergenic and safe for healing.",
    },
    {
      icon: ClipboardList,
      title: "Detailed Aftercare",
      description:
        "Written and verbal aftercare instructions, plus ongoing support throughout healing.",
    },
    {
      icon: ShieldCheck,
      title: "Health Screening",
      description:
        "Consultation before every piercing to ensure you're a good candidate for the procedure.",
    },
  ];

  return (
    <section
      id="safety"
      className="py-24 bg-black"
      ref={ref}
      role="region"
      aria-label="Safety and Hygiene Standards"
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
            Safety & Hygiene Standards
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every procedure follows strict hygiene protocols that meet and
            exceed industry standards.
          </p>
        </motion.div>

        {/* Safety Measures */}
        <div className="max-w-5xl mx-auto space-y-6">
          {safetyMeasures.map((measure, index) => {
            const Icon = measure.icon;
            return (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start gap-6 rounded-2xl border border-gray-800 bg-black/40 backdrop-blur-sm px-8 py-6"
              >
                {/* Vertical Connector */}
                <span className="absolute left-6 top-full h-6 w-px bg-gray-800 last:hidden" />

                {/* Icon Column */}
                <div className="flex-shrink-0">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10"
                    aria-hidden="true" // icon is decorative
                  >
                    <Icon className="text-amber-400" size={22} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {measure.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-2xl">
                    {measure.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Safety;
