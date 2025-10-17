import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaYoutube, FaKaggle } from 'react-icons/fa';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/vtrushikannan', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/vtrushikannan', label: 'LinkedIn' },
    { icon: FaMedium, href: 'https://medium.com/@vtrushikannan', label: 'Medium' },
    { icon: FaYoutube, href: 'https://youtube.com/@vtrushikannan', label: 'YouTube' },
    { icon: FaKaggle, href: 'https://kaggle.com/vtrushikannan', label: 'Kaggle' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-max section-padding">
        <div className="text-center">
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <blockquote className="text-xl md:text-2xl font-light text-gray-600 italic">
              "Success is not a destination, it's a journey."
            </blockquote>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">V T Rushi Kannan</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto"
          >
            <span className="font-semibold text-primary-600">AI & Data Science Enthusiast</span> | 
            <span className="font-semibold text-secondary-600"> Aspiring Bilingual Developer (EN/JP)</span> | 
            <span className="font-semibold text-primary-600"> Top 1% Globally in Bullet Chess (Chess.com)</span> | 
            <span className="font-semibold text-secondary-600"> Django Developer & Deep Learning Explorer</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            <span className="font-medium">Passions:</span> Artificial Intelligence, Japanese Culture, Competitive Chess
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-12"
          >
            Get in Touch
          </motion.button>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
