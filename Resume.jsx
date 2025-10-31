import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  const experience = [
    {
      title: "Full Stack Developer Intern",
      company: "Future Interns",
      period: "2024 - Present",
      location: "Remote",
      description: [
        "Developing modern web applications using React, Node.js, and MongoDB",
        "Implementing responsive designs and optimizing application performance",
        "Collaborating with cross-functional teams to deliver high-quality solutions",
        "Writing clean, maintainable code following industry best practices"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2023 - 2024",
      location: "Remote",
      description: [
        "Built responsive websites for various clients using React and modern CSS",
        "Implemented pixel-perfect designs with attention to user experience",
        "Optimized websites for performance and search engine visibility",
        "Maintained ongoing client relationships and provided technical support"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Your University",
      period: "2021 - 2025",
      location: "India",
      gpa: "8.5/10",
      description: [
        "Relevant coursework: Data Structures, Algorithms, Database Systems",
        "Web Development, Software Engineering, Computer Networks",
        "Active member of coding club and tech societies",
        "Participated in various hackathons and coding competitions"
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Your School",
      period: "2019 - 2021",
      location: "India",
      gpa: "85%",
      description: [
        "Science stream with Mathematics, Physics, and Chemistry",
        "Developed strong analytical and problem-solving skills",
        "Participated in science exhibitions and mathematics olympiads"
      ]
    }
  ];

  const achievements = [
    {
      title: "Best Project Award",
      organization: "University Tech Fest",
      year: "2024",
      description: "Won first place for developing an innovative web application"
    },
    {
      title: "Hackathon Winner",
      organization: "Code Sprint 2023",
      year: "2023", 
      description: "Led team to victory in 48-hour coding challenge"
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      year: "2023-Present",
      description: "Active contributor to various open-source projects"
    },
    {
      title: "Technical Blog Writer",
      organization: "Dev.to",
      year: "2023-Present",
      description: "Published articles on web development with 10k+ views"
    }
  ];

  const tabs = [
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "achievements", label: "Achievements", icon: "🏆" }
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            My professional journey, education, and achievements
          </p>
          
          {/* Download Resume Button */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {/* Experience Tab */}
          {activeTab === "experience" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card mb-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2 lg:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card mb-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-blue-600 font-semibold">{edu.institution}</p>
                      <p className="text-gray-600">{edu.location}</p>
                      {edu.gpa && (
                        <p className="text-green-600 font-medium">GPA: {edu.gpa}</p>
                      )}
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-2 lg:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {edu.description.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Achievements Tab */}
          {activeTab === "achievements" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="card"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{achievement.title}</h3>
                      <p className="text-blue-600 font-medium mb-1">{achievement.organization}</p>
                      <p className="text-gray-500 text-sm mb-2">{achievement.year}</p>
                      <p className="text-gray-700 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}