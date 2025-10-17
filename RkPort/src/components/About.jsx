import { motion } from 'framer-motion';
import { FaGraduationCap, FaBrain, FaLanguage, FaChess } from 'react-icons/fa';

const About = () => {
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

  const highlights = [
    {
      icon: FaGraduationCap,
      title: "B.Tech in AI & DS",
      description: "Pursuing at KL University, Hyderabad with focus on Artificial Intelligence and Data Science"
    },
    {
      icon: FaBrain,
      title: "AI & Deep Learning",
      description: "Passionate about machine learning, neural networks, and cutting-edge AI technologies"
    },
    {
      icon: FaLanguage,
      title: "Japanese Language",
      description: "Learning Japanese with JLPT N5 certification, exploring Japanese culture and technology"
    },
    {
      icon: FaChess,
      title: "Chess Excellence",
      description: "Top 1% globally in Bullet Chess on Chess.com, strategic thinking and competitive gaming"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate <span className="font-semibold text-primary-600">AI & Data Science enthusiast</span> 
              currently pursuing my B.Tech in Artificial Intelligence and Data Science at KL University, Hyderabad. 
              My journey in technology is driven by an insatiable curiosity about how machines can learn and think.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond academics, I'm deeply fascinated by <span className="font-semibold text-secondary-600">Japanese culture and language</span>, 
              currently working towards my JLPT N5 certification. This cultural exploration complements my technical pursuits, 
              as I believe understanding different perspectives enhances problem-solving abilities.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding or studying, you'll find me playing chess, where I've achieved the 
              <span className="font-semibold text-primary-600"> top 1% globally in Bullet Chess</span> on Chess.com. 
              This strategic game has taught me valuable lessons about patience, planning, and thinking several moves ahead.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg mr-4">
                    <highlight.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{highlight.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "Top 1%", label: "Chess Ranking" },
            { number: "JLPT N5", label: "Japanese Level" },
            { number: "3+", label: "Years Learning" },
            { number: "∞", label: "Curiosity" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
