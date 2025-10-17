import { motion } from 'framer-motion';
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning with Python",
      issuer: "NPTEL",
      date: "2024",
      description: "Comprehensive course covering machine learning algorithms, data preprocessing, model evaluation, and practical applications using Python.",
      skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Machine Learning"],
      credential: "NPTEL-2024-ML",
      link: "https://drive.google.com/file/d/1iX8gsGN5o65CkkT9F97m2sDcpOmZFAep/view?usp=sharing"
    },
    {
      title: "GitHub Foundations",
      issuer: "GitHub",
      date: "2024",
      description: "Professional certification in version control, collaborative development, and GitHub best practices for software development.",
      skills: ["Git", "GitHub", "Version Control", "Collaborative Development", "CI/CD"],
      credential: "GH-FOUNDATIONS-2024",
      link: "https://drive.google.com/file/d/14yvJ4bKkEQuPOuHZNTWLjdoQwMePeHgJ/view?usp=sharing"
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
    <section id="certifications" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional certifications and courses that demonstrate my commitment to continuous learning and skill development.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg mr-4">
                    <FaCertificate className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{cert.title}</h3>
                    <div className="flex items-center text-primary-600 font-semibold">
                      {cert.issuer}
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <FaCalendarAlt className="mr-1" />
                  {cert.date}
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Skills Gained:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Credential ID:</span> {cert.credential}
                </div>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  <FaExternalLinkAlt className="mr-1" />
                  View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
            <p className="text-lg opacity-90 mb-6">
              I believe in lifelong learning and staying updated with the latest technologies. 
              These certifications represent just a part of my learning journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2+</div>
                <div className="text-lg opacity-90">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Hours of Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">∞</div>
                <div className="text-lg opacity-90">Curiosity</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
