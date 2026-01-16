import { MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-900 border-t border-gray-800 py-12"
      aria-labelledby="footer-heading"
    >
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Pokedbylocc",
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
          "email": "liltrip060@gmail.com",
          "url": "https://yourwebsite.com",
          "sameAs": [
            "https://www.instagram.com/pokedbylocc_",
            "https://www.tiktok.com/@loccedn606"
          ]
        }
        `}
      </script>

      <h2 id="footer-heading" className="sr-only">
        Pokedbylocc Footer
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Pokedbylocc</h3>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:liltrip060@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors duration-300"
                aria-label="Send email to Pokedbylocc"
              >
                <Mail size={18} />
                <span>liltrip060@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                <span>Atlanta, GA</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hours</h3>
            <div className="text-gray-400 space-y-1">
              <p>Tuesday - Saturday: 11:00 AM - 7:00 PM</p>
              <p>Sunday & Monday: Closed</p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy;{currentYear} Pokedbylocc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
