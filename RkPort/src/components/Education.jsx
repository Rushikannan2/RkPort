import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
      institution: "KL University, Hyderabad",
      duration: "May 2023 - Present",
      location: "Hyderabad, India",
      description: "Majoring in AI & DS. Current CGPA: 8.66/10.0. Relevant Coursework: Machine Learning, Data Structures, DBMS, Python/Django Development.",
      highlights: [
        "Machine Learning",
        "Data Structures",
        "DBMS",
        "Python/Django Development"
      ]
    },
    {
      degree: "Class 12 (Senior Secondary)",
      institution: "State Board, Hyderabad",
      duration: "June 2021 - March 2023",
      location: "Hyderabad, India",
      description: "Cumulative GPA: 804/1000. Focused on Mathematics and core sciences.",
      highlights: [
        "Mathematics excellence",
        "Core sciences",
        "Strong academic foundation"
      ]
    },
    {
      degree: "Class 10 (High School)",
      institution: "ST. Little Theresa's High School",
      duration: "April 2021",
      location: "Hyderabad, India",
      description: "GPA: 10.0. Strong foundation in Mathematics and Science.",
      highlights: [
        "Mathematics excellence",
        "Science foundation",
        "Academic excellence"
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
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            My educational journey focused on building a strong foundation in AI, Data Science, and technology.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg mr-4">
                      <FaGraduationCap className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                      <div className="flex items-center text-primary-600 font-semibold text-lg">
                        {edu.institution}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-2" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2" />
                      {edu.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {edu.description}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Highlights:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <motion.div
                      key={highlightIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: highlightIndex * 0.1 }}
                      className="flex items-center bg-gradient-to-r from-primary-50 to-secondary-50 p-3 rounded-lg border border-primary-100"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-lg opacity-90 mb-6">
              Beyond formal education, I'm constantly exploring new technologies, 
              participating in online courses, and staying updated with the latest 
              developments in AI and Data Science.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Online Courses</div>
                <div className="text-lg opacity-90">NPTEL, Coursera, edX</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Research Projects</div>
                <div className="text-lg opacity-90">NLP, Deep Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Certifications</div>
                <div className="text-lg opacity-90">Industry Standards</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
