import { motion } from 'framer-motion';
import { FaTrophy, FaChess, FaGraduationCap, FaMicrophone, FaStar, FaMedal } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: "Top 1% Globally in Bullet Chess",
      platform: "Chess.com",
      year: "2024",
      description: "Achieved top 1% ranking globally in bullet chess, demonstrating exceptional strategic thinking and quick decision-making abilities.",
      icon: FaChess,
      category: "Gaming",
      level: "Global",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "NPTEL Elite Certification",
      platform: "IIT Kharagpur",
      year: "2024",
      description: "Secured elite certification in Machine Learning course from NPTEL, placing among top performers in the program.",
      icon: FaGraduationCap,
      category: "Education",
      level: "National",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "FIRE 2025 IIT BHU Presentation",
      platform: "IIT BHU",
      year: "2025",
      description: "Selected to present research work at FIRE 2025 conference at IIT BHU, showcasing innovative AI research contributions.",
      icon: FaMicrophone,
      category: "Research",
      level: "National",
      color: "from-green-500 to-green-700"
    },
    {
      title: "GitHub Foundations Certified",
      platform: "GitHub",
      year: "2024",
      description: "Professional certification in GitHub foundations, demonstrating expertise in version control and collaborative development.",
      icon: FaStar,
      category: "Professional",
      level: "International",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Japanese Language Proficiency",
      platform: "JLPT",
      year: "2024",
      description: "Achieved JLPT N5 certification, demonstrating commitment to learning Japanese language and culture.",
      icon: FaMedal,
      category: "Language",
      level: "International",
      color: "from-red-500 to-red-700"
    },
    {
      title: "Research Internship Excellence",
      platform: "IIIT Kottayam",
      year: "2024",
      description: "Recognized for outstanding contribution to CryptoNLP research project, demonstrating research excellence and innovation.",
      icon: FaTrophy,
      category: "Research",
      level: "Institutional",
      color: "from-indigo-500 to-indigo-700"
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
    <section id="achievements" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements & Recognition</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Notable achievements and recognitions that highlight my dedication to excellence in various domains.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start mb-4">
                <div className={`p-4 bg-gradient-to-r ${achievement.color} rounded-xl mr-4`}>
                  <achievement.icon className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary-600 font-semibold">{achievement.platform}</span>
                    <span className="text-gray-500 text-sm">{achievement.year}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      achievement.category === 'Gaming' ? 'bg-yellow-100 text-yellow-700' :
                      achievement.category === 'Education' ? 'bg-blue-100 text-blue-700' :
                      achievement.category === 'Research' ? 'bg-green-100 text-green-700' :
                      achievement.category === 'Professional' ? 'bg-purple-100 text-purple-700' :
                      achievement.category === 'Language' ? 'bg-red-100 text-red-700' :
                      'bg-indigo-100 text-indigo-700'
                    }`}>
                      {achievement.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      achievement.level === 'Global' ? 'bg-yellow-100 text-yellow-700' :
                      achievement.level === 'National' ? 'bg-blue-100 text-blue-700' :
                      achievement.level === 'International' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {achievement.level}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "Top 1%", label: "Chess Ranking", icon: FaChess },
            { number: "6+", label: "Achievements", icon: FaTrophy },
            { number: "3", label: "Categories", icon: FaStar },
            { number: "∞", label: "Potential", icon: FaMedal }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full">
                  <stat.icon className="text-white text-xl" />
                </div>
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Future Aspirations</h3>
            <p className="text-lg opacity-90 mb-6">
              These achievements are just the beginning. I'm committed to continuous growth, 
              learning, and making meaningful contributions to the fields of AI and technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Research</div>
                <div className="text-lg opacity-90">Advancing AI knowledge</div>
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

export default Achievements;
