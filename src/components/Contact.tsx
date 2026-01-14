import { motion } from "framer-motion";
import { Instagram, Mail, Send, User, Phone, Music2 } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 bg-black"
      ref={ref}
    >
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Certified Body Piercings",
          "image": "https://yourwebsite.com/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Studio Address",
            "addressLocality": "Atlanta",
            "addressRegion": "GA",
            "postalCode": "30301",
            "addressCountry": "US"
          },
          "telephone": "+1-555-555-5555",
          "email": "ayodejidev12345@gmail.com",
          "url": "https://yourwebsite.com",
          "sameAs": [
            "https://www.instagram.com/pokedbylocc_",
            "https://www.tiktok.com/@loccedn606"
          ]
        }
        `}
      </script>

      {/* Section Header */}
      <header className="text-center mb-16">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Book Your Professional Piercing
        </motion.h2>
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Contact your <strong>Atlanta certified body piercer</strong> today.
          Schedule a safe, sterile, and professional piercing appointment, or
          ask questions about your piercing consultation.
        </motion.p>
      </header>

      {/* Contact Form & Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Appointment Form */}
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 space-y-5"
          name="booking-form"
          method="POST"
          action="https://formspree.io/f/xlggdjyn"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Book an Appointment
          </h3>

          {/* Name */}
          <label className="text-gray-300 text-sm block">
            Full Name
            <div className="relative mt-1">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                aria-required="true"
                placeholder="Your full name"
                className="w-full bg-black border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-amber-400 transition"
                required
              />
            </div>
          </label>

          {/* Email */}
          <label className="text-gray-300 text-sm block">
            Email
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                aria-required="true"
                placeholder="you@example.com"
                className="w-full bg-black border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-amber-400 transition"
                required
              />
            </div>
          </label>

          {/* Phone */}
          <label className="text-gray-300 text-sm block">
            Phone Number
            <div className="relative mt-1">
              <Phone
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="tel"
                name="phone"
                aria-required="true"
                placeholder="+1..."
                className="w-full bg-black border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-amber-400 transition"
              />
            </div>
          </label>

          {/* Piercing Request */}
          <label className="text-gray-300 text-sm block">
            Piercing Request
            <textarea
              name="message"
              aria-required="true"
              placeholder="What piercing are you interested in?"
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition resize-none mt-1"
              required
            />
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <Send size={18} />
            Submit Booking Request
          </button>
        </motion.form>

        {/* Social & Email Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-6"
        >
          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/pokedbylocc_"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            className="group bg-gradient-to-br from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50 cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/10 rounded-full p-4">
                <Instagram size={32} className="text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-1">
                  Instagram
                </h3>
                <p className="text-pink-100">Portfolio & daily updates</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Explore recent work, healed piercings, and client highlights. DM
              to connect directly.
            </p>
          </motion.a>

          {/* TikTok */}
          <motion.a
            href="https://www.tiktok.com/@loccedn606"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            className="group bg-gradient-to-br from-neutral-900 to-neutral-800 border border-gray-700 hover:border-gray-500 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/10 rounded-full p-4">
                <Music2 size={32} className="text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-1">TikTok</h3>
                <p className="text-gray-300">Behind-the-scenes & trends</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Watch piercing processes, studio vibes, and educational content in
              short-form video.
            </p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:ayodejidev12345@gmail.com"
            whileHover={{ scale: 1.04 }}
            className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-amber-400 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20 cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-amber-400/10 rounded-full p-4">
                <Mail size={32} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Email</h3>
                <p className="text-gray-300">Formal enquiries</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              For detailed questions, collaborations, or special requests, reach
              out via email.
            </p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
