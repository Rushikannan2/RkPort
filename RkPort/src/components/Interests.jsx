import { motion } from 'framer-motion';
import { FaLanguage, FaChess, FaBook, FaGamepad, FaMusic, FaCamera, FaCode, FaBrain } from 'react-icons/fa';

const Interests = () => {
  const interests = [
    {
      title: "Japanese Language Learning",
      description: "Passionate about learning Japanese language and culture. Currently working towards JLPT N4 certification and exploring Japanese literature, anime, and traditional culture.",
      icon: FaLanguage,
      color: "from-red-500 to-red-700",
      activities: ["JLPT N5 Certified", "Duolingo Streak", "Japanese Literature", "Cultural Studies"],
      level: "Intermediate"
    },
    {
      title: "Competitive Chess",
      description: "Top 1% globally in bullet chess on Chess.com. Chess has taught me strategic thinking, patience, and the importance of planning several moves ahead.",
      icon: FaChess,
      color: "from-yellow-500 to-orange-500",
      activities: ["Bullet Chess", "Tournament Play", "Strategy Analysis", "Teaching Others"],
      level: "Expert"
    },
    {
      title: "Continuous Learning",
      description: "Maintaining a strong Duolingo streak and constantly exploring new technologies, programming languages, and AI research papers to stay updated.",
      icon: FaBook,
      color: "from-blue-500 to-blue-700",
      activities: ["Online Courses", "Research Papers", "Tech Blogs", "Documentation"],
      level: "Advanced"
    },
    {
      title: "Gaming & Strategy",
      description: "Enjoy strategic games that challenge thinking and problem-solving abilities. Gaming helps develop quick decision-making and strategic planning skills.",
      icon: FaGamepad,
      color: "from-green-500 to-green-700",
      activities: ["Chess", "Strategy Games", "Puzzle Games", "Competitive Gaming"],
      level: "Expert"
    },
    {
      title: "Music & Creativity",
      description: "Appreciate various genres of music and enjoy exploring how technology intersects with creativity. Music provides inspiration for coding and problem-solving.",
      icon: FaMusic,
      color: "from-purple-500 to-purple-700",
      activities: ["Music Discovery", "Creative Coding", "Audio Processing", "Cultural Music"],
      level: "Enthusiast"
    },
    {
      title: "Photography & Visual Arts",
      description: "Interested in photography and visual arts, especially how AI can enhance creative processes. Exploring the intersection of technology and visual creativity.",
      icon: FaCamera,
      color: "from-pink-500 to-pink-700",
      activities: ["Digital Photography", "AI Art", "Visual Design", "Creative Projects"],
      level: "Intermediate"
    }
  ];

  const learningStreaks = [
    { platform: "Duolingo", streak: "365+", language: "Japanese" },
    { platform: "Chess.com", streak: "Daily", activity: "Chess Practice" },
    { platform: "GitHub", streak: "Continuous", activity: "Code Contributions" },
    { platform: "Research", streak: "Weekly", activity: "Paper Reading" }
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
    <section id="interests" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Interests & Hobbies</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Beyond technical skills, I have diverse interests that shape my perspective and contribute to my personal and professional growth.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start mb-4">
                <div className={`p-4 bg-gradient-to-r ${interest.color} rounded-xl mr-4`}>
                  <interest.icon className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{interest.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      interest.level === 'Expert' ? 'bg-green-100 text-green-700' :
                      interest.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                      interest.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {interest.level}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                {interest.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Activities:</h4>
                <div className="flex flex-wrap gap-2">
                  {interest.activities.map((activity, activityIndex) => (
                    <motion.span
                      key={activityIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: activityIndex * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {activity}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Streaks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="gradient-text">Learning Streaks & Habits</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningStreaks.map((streak, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl font-bold gradient-text mb-2">{streak.streak}</div>
                <div className="text-sm text-gray-600 mb-1">{streak.platform}</div>
                <div className="text-xs text-gray-500">{streak.activity || streak.language}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Personal Philosophy</h3>
            <p className="text-lg opacity-90 mb-6">
              I believe that diverse interests and continuous learning are essential for personal growth and professional success. 
              Each hobby and interest I pursue contributes to my problem-solving abilities, creativity, and understanding of different perspectives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Balance</div>
                <div className="text-lg opacity-90">Work-life harmony</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Growth</div>
                <div className="text-lg opacity-90">Continuous learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Passion</div>
                <div className="text-lg opacity-90">Following interests</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
