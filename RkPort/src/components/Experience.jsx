import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaGithub, FaMedium, FaYoutube } from 'react-icons/fa';

const Experience = () => {
  const experienceData = [
    {
      title: "Research Intern",
      company: "IIIT Kottayam",
      duration: "2024 - Present",
      location: "Kottayam, India",
      description: "Working on CryptoNLP project focusing on cryptocurrency sentiment analysis and natural language processing applications in financial markets.",
      responsibilities: [
        "Developing NLP models for cryptocurrency sentiment analysis",
        "Implementing machine learning algorithms for market prediction",
        "Collaborating with research team on data preprocessing and model optimization",
        "Contributing to academic papers and research publications"
      ],
      technologies: ["Python", "NLP", "Machine Learning", "TensorFlow", "Pandas", "NLTK"],
      links: [
        { icon: FaGithub, href: "https://github.com/vtrushikannan/cryptonlp", label: "GitHub" },
        { icon: FaMedium, href: "https://medium.com/@vtrushikannan", label: "Medium" },
        { icon: FaYoutube, href: "https://youtube.com/@vtrushikannan", label: "YouTube" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="work-experience" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Work Experience</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional experience in AI research and development, contributing to cutting-edge projects.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg mr-4">
                      <FaBriefcase className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                      <div className="flex items-center text-primary-600 font-semibold text-lg mb-2">
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Responsibilities:</h4>
                  <div className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <motion.div
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: respIndex * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">{responsibility}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Links */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Project Links:</h4>
                  <div className="flex space-x-4">
                    {exp.links.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        <link.icon className="mr-2" />
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Career Aspirations</h3>
            <p className="text-lg opacity-90 mb-6">
              I'm passionate about contributing to the AI revolution and building solutions 
              that can make a real difference in people's lives. My goal is to become a 
              leading researcher and developer in the field of artificial intelligence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">AI Research</div>
                <div className="text-lg opacity-90">Advancing the field</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Innovation</div>
                <div className="text-lg opacity-90">Building the future</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Impact</div>
                <div className="text-lg opacity-90">Making a difference</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
