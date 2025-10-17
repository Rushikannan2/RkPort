import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBrain, FaRobot, FaShieldAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Emotion Detection in Tweets",
      description: "A machine learning model that analyzes Twitter posts to detect and classify emotions using natural language processing techniques. Built with advanced sentiment analysis algorithms.",
      image: "🧠",
      technologies: ["Python", "NLTK", "Scikit-learn", "TensorFlow", "Pandas", "Matplotlib"],
      features: [
        "Real-time emotion classification",
        "Multi-label emotion detection",
        "Twitter API integration",
        "Interactive visualization dashboard"
      ],
      github: "https://github.com/vtrushikannan/emotion-detection",
      demo: "https://emotion-detection-demo.vercel.app",
      status: "Completed"
    },
    {
      title: "MochiMind",
      description: "An intelligent AI assistant inspired by Japanese culture, designed to help users learn Japanese language and understand cultural nuances. Features conversational AI and language learning modules.",
      image: "🤖",
      technologies: ["Python", "OpenAI API", "Flask", "React", "PostgreSQL", "Docker"],
      features: [
        "Conversational AI interface",
        "Japanese language tutoring",
        "Cultural context explanations",
        "Progress tracking system"
      ],
      github: "https://github.com/vtrushikannan/mochimind",
      demo: "https://mochimind.ai",
      status: "In Development"
    },
    {
      title: "ASV Spoofing Research",
      description: "Research project on Automatic Speaker Verification (ASV) spoofing detection using deep learning techniques. Focuses on developing robust anti-spoofing mechanisms for voice authentication systems.",
      image: "🛡️",
      technologies: ["Python", "PyTorch", "Librosa", "NumPy", "Scipy", "Matplotlib"],
      features: [
        "Deep learning models for spoofing detection",
        "Audio signal processing",
        "Feature extraction algorithms",
        "Performance evaluation metrics"
      ],
      github: "https://github.com/vtrushikannan/asv-spoofing",
      demo: "https://asv-research.vercel.app",
      status: "Research Phase"
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
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of AI and machine learning projects that showcase my technical skills and passion for innovation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 card-hover"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-700' 
                      : project.status === 'In Development'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
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
            <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
            <p className="text-lg opacity-90 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
