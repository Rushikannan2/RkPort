import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const Workshops = () => {
  const workshops = [
    {
      title: "Advanced Machine Learning Techniques",
      organizer: "IIT Kanpur",
      year: "2024",
      location: "Kanpur, India",
      description: "Intensive workshop covering advanced ML algorithms, deep learning architectures, and practical implementation strategies for real-world applications.",
      topics: [
        "Deep Neural Networks",
        "Computer Vision",
        "Natural Language Processing",
        "Model Optimization",
        "Deployment Strategies"
      ],
      participants: "150+",
      duration: "3 days"
    },
    {
      title: "Data Science and Analytics",
      organizer: "KLH (KL University)",
      year: "2023",
      location: "Hyderabad, India",
      description: "Comprehensive workshop on data science methodologies, statistical analysis, and data visualization techniques for business intelligence.",
      topics: [
        "Statistical Analysis",
        "Data Visualization",
        "Business Intelligence",
        "Predictive Modeling",
        "Data Ethics"
      ],
      participants: "200+",
      duration: "2 days"
    },
    {
      title: "AI Research and Innovation",
      organizer: "IIT Hyderabad",
      year: "2023",
      location: "Hyderabad, India",
      description: "Cutting-edge workshop focusing on AI research methodologies, innovation in artificial intelligence, and future trends in the field.",
      topics: [
        "AI Research Methods",
        "Innovation in AI",
        "Ethical AI",
        "Future AI Trends",
        "Research Publication"
      ],
      participants: "100+",
      duration: "2 days"
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
    <section id="workshops" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Workshops & Training</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Participated in various workshops and training programs to enhance technical skills and stay updated with industry trends.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg mr-4">
                      <FaChalkboardTeacher className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{workshop.title}</h3>
                      <div className="flex items-center text-primary-600 font-semibold text-lg mb-2">
                        {workshop.organizer}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-2" />
                      {workshop.year}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaUsers className="mr-2" />
                      {workshop.participants} participants
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium">{workshop.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {workshop.description}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Topics Covered:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {workshop.topics.map((topic, topicIndex) => (
                    <motion.div
                      key={topicIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: topicIndex * 0.1 }}
                      className="flex items-center bg-gradient-to-r from-primary-50 to-secondary-50 p-3 rounded-lg border border-primary-100"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Learning Philosophy</h3>
            <p className="text-lg opacity-90 mb-6">
              I believe in the power of continuous learning and knowledge sharing. 
              These workshops have not only enhanced my technical skills but also 
              provided valuable networking opportunities and exposure to industry best practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-lg opacity-90">Workshops Attended</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">450+</div>
                <div className="text-lg opacity-90">Total Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">7</div>
                <div className="text-lg opacity-90">Days of Learning</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workshops;
