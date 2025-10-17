import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium, FaYoutube, FaKaggle, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "vtrushikannan@gmail.com",
      href: "mailto:vtrushikannan@gmail.com",
      color: "from-red-500 to-red-700"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/vtrushikannan",
      href: "https://github.com/vtrushikannan",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vtrushikannan",
      href: "https://linkedin.com/in/vtrushikannan",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: FaMedium,
      label: "Medium",
      value: "medium.com/@vtrushikannan",
      href: "https://medium.com/@vtrushikannan",
      color: "from-green-600 to-green-800"
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      value: "youtube.com/@vtrushikannan",
      href: "https://youtube.com/@vtrushikannan",
      color: "from-red-600 to-red-800"
    },
    {
      icon: FaKaggle,
      label: "Kaggle",
      value: "kaggle.com/vtrushikannan",
      href: "https://kaggle.com/vtrushikannan",
      color: "from-purple-600 to-purple-800"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, creative ideas, or just having a chat about technology and AI.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Whether you're interested in collaborating on a project, discussing AI research, 
                or just want to connect, I'd love to hear from you. Feel free to reach out through 
                any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-center">
                    <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 mb-1">{contact.label}</div>
                      <div className="text-sm text-gray-600">{contact.value}</div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="mr-3 text-xl" />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-sm opacity-90">Hyderabad, India</div>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-xl" />
                <div>
                  <div className="font-semibold">Available for</div>
                  <div className="text-sm opacity-90">Collaborations & Opportunities</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-lg opacity-90 mb-6">
              I'm always excited to work on new projects, discuss innovative ideas, 
              or contribute to meaningful research in AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:vtrushikannan@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <FaEnvelope className="mr-2" />
                Send Email
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/vtrushikannan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <FaLinkedin className="mr-2" />
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
