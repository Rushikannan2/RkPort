import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaBrain, FaLanguage, FaChess } from 'react-icons/fa';

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, color: "from-yellow-500 to-orange-500" },
    { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
    { name: "React", level: 80, color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", level: 75, color: "from-blue-500 to-blue-700" },
    { name: "Django", level: 85, color: "from-green-500 to-green-700" },
    { name: "PostgreSQL", level: 80, color: "from-blue-600 to-blue-800" },
    { name: "TensorFlow", level: 85, color: "from-orange-500 to-red-500" },
    { name: "PyTorch", level: 80, color: "from-red-500 to-red-700" },
    { name: "Git", level: 90, color: "from-orange-600 to-orange-800" },
    { name: "Docker", level: 70, color: "from-blue-500 to-blue-700" }
  ];

  const professionalSkills = [
    { name: "Teamwork", icon: FaUsers, level: 95 },
    { name: "Research", icon: FaBrain, level: 90 },
    { name: "Time Management", icon: FaChess, level: 88 },
    { name: "Adaptability", icon: FaCode, level: 92 },
    { name: "Problem Solving", icon: FaBrain, level: 94 },
    { name: "Communication", icon: FaUsers, level: 87 }
  ];

  const languages = [
    { name: "English", level: 95, native: true },
    { name: "Tamil", level: 100, native: true },
    { name: "Hindi", level: 90, native: false },
    { name: "Telugu", level: 85, native: false },
    { name: "Japanese", level: 60, native: false }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="technical-skills" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical abilities, professional skills, and language proficiencies.
          </motion.p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="gradient-text">Technical Skills</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="gradient-text">Professional Skills</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-100 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full">
                    <skill.icon className="text-white text-2xl" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h4>
                <div className="flex justify-center items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600"
                    />
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-600">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="gradient-text">Languages</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800">{language.name}</span>
                    {language.native && (
                      <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Native
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-600">{language.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${language.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-3 rounded-full ${
                      language.native 
                        ? 'bg-gradient-to-r from-green-500 to-green-600' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Skills Summary</h3>
            <p className="text-lg opacity-90 mb-6">
              My diverse skill set combines technical expertise with strong professional abilities, 
              enabling me to tackle complex challenges and contribute effectively to any team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-lg opacity-90">Technical Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6</div>
                <div className="text-lg opacity-90">Professional Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-lg opacity-90">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">∞</div>
                <div className="text-lg opacity-90">Growth Mindset</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
