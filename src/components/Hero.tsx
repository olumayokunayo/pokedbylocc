import { motion } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import Piercing3D from "./Piercing3D";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
      role="banner"
      aria-label="Hero section for Pokedbylocc, certified body piercings in Atlanta, GA"
    >
      {/* 3D Background */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      >
        <Piercing3D />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-amber-400 mb-6"
        >
          <MapPin size={20} />
          <span className="text-sm font-medium tracking-wide">Atlanta, GA</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Certified Body
          <span className="block text-amber-400 mt-2">Piercings</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-sm text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Licensed body piercer, 18 or older and parental consent required for
          minors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="group bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 w-full sm:w-auto"
          >
            Book an Appointment
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="group border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            View My Work
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection("about")}
          className="text-amber-400 hover:text-amber-300 transition-colors duration-300 animate-bounce"
          aria-label="Scroll down to About section"
        >
          <ChevronDown size={40} />
        </button>
      </motion.div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Pokedbylocc",
          description:
            "Certified body piercer in Atlanta, GA, specializing in safe, licensed, and artistic piercings.",
          image: "https://yourwebsite.com/assets/hero-image.jpg",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Atlanta",
            addressRegion: "GA",
            postalCode: "30301",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "33.7490",
            longitude: "-84.3880",
          },
          url: "https://yourwebsite.com",
          telephone: "+1-000-000-0000",
          openingHours: "Tu-Sa 11:00-19:00",
          priceRange: "$$",
        })}
      </script>
    </section>
  );
};

export default Hero;
