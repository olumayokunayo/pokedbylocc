import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const galleryImages = [
    { url: image1, alt: "Stomach dermal piercing by Pokedbylocc" },
    { url: image2, alt: "Double tragus piercing by Pokedbylocc" },
    { url: image5, alt: "Double dermal piercings by Pokedbylocc" },
    { url: image6, alt: "Single dermal piercing by Pokedbylocc" },
    { url: image7, alt: "Full ear piercing set by Pokedbylocc" },
    { url: image8, alt: "Snake eyes piercings by Pokedbylocc" },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Recent Work
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            A glimpse into the precision and artistry of professional body
            piercings by a licensed piercer in Atlanta, GA.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-800 cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-semibold text-lg">
                  {image.alt}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Instagram Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.instagram.com/pokedbylocc_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See more piercing work on Instagram"
            className="inline-flex items-center gap-3 text-amber-400 hover:text-amber-300 transition-colors duration-300 text-lg font-semibold group"
          >
            <Instagram
              size={28}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span>See more work on Instagram</span>
          </a>
        </motion.div>

        {/* JSON-LD Structured Data for Gallery Images */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Body Piercing Gallery - Pokedbylocc",
            url: "https://yourwebsite.com/gallery",
            image: galleryImages.map((img) => ({
              "@type": "ImageObject",
              contentUrl: `https://yourwebsite.com/${img.url}`,
              description: img.alt,
            })),
          })}
        </script>
      </div>
    </section>
  );
};

export default Gallery;
