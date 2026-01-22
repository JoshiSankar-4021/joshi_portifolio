import { motion } from 'framer-motion';
import './About.css';
import pragathilogo from '../assets/pragathi.png';
import school from '../assets/school.png';
import appriLogo from '../assets/apprify.png';

const About = () => {
  // Motion variants for smooth animations
  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <section className="about-hero">
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Joshi Sankar Telaprolu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            1.6+ years building enterprise solutions at Pennant Technologies, 
            Visakhapatnam. Expert in Java/Spring Boot backends, React/NextJS 
            frontends, and full-stack LOS/LMS systems. Passionate about crafting 
            scalable web/mobile apps with clean code.
          </motion.p>
        </motion.div>
      </section>

      {/* EDUCATION SECTION - NEW SEPARATE SECTION */}
      <section className="education">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Education
        </motion.h2>
       {/* B.Tech Card */}
<div className="education-card">
  <motion.div className="edu-content" /* your motion props */>
    <div className="edu-header">
      <img src="https://image-static.collegedunia.com/images/profile/2024-01-01/1704119078_maxresdefault.jpg" className='instituteimg' alt="NSRIT" />
      <div className="edu-text">
        <h3>B.Tech Computer Science Engineering</h3>
        <span>2017-2021</span>
      </div>
    </div>
    <h4>NSRIT (Nadimpalli Satyanarayana Raju Institute Of Technology)</h4>
    <p>Bachelor of Technology in Computer Science and Engineering. Batch 2017-2021.</p>
  </motion.div>
</div>
<br/><br/><br/>
{/* Intermediate Card */}
<div className="education-card">
  <motion.div className="edu-content" /* your motion props */>
    <div className="edu-header">
      <img src={pragathilogo} className='instituteimg' alt="Pragathi" />
      <div className="edu-text">
        <h3>Intermediate (MPC)</h3>
        <span>2015-2017</span>
      </div>
    </div>
    <h4>Pragathi Defence Academy</h4>
    <p>Intermediate education in Mathematics, Physics, and Chemistry (MPC). Batch 2015-2017.</p>
  </motion.div>
</div>
<br/><br/><br/>
{/* 10TH CLASS */}
<div className="education-card">
  <motion.div className="edu-content" /* your motion props */>
    <div className="edu-header">
      <img src={school} className='instituteimg' alt="Pragathi" />
      <div className="edu-text">
        <h3>Xth</h3>
        <span>2014-2015</span>
      </div>
    </div>
    <h4>Rama Krishna School</h4>
<p>
  Completed Secondary School Education with a strong academic foundation and
  discipline.
</p>
</motion.div>
</div>
</section>

      {/* EXPERIENCE SECTION - REMAINS TIMELINE */}
      <section className="experience">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Experience, Internships & Certificates
        </motion.h2>
        <div className="timeline-container">
          <div className="timeline">
            <motion.div 
              className="timeline-item left"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <img src={appriLogo} alt="Apprify Logo" style={{
                                                          width: '400px',
                                                          height: '100px',
                                                          borderRadius: '20px',  // Medium pill shape; use '50%' for full oval
                                                          backgroundColor: '#6049ea',  // Optional: visible fill from your portfolio theme
                                                          border: '1px solid rgba(96, 73, 234, 0.4)'  // Matches education/timeline borders
                                                        }}/>
                <h3>Android Internship</h3>
                <span>April 2019 - September 2019</span>
                <h4>Apprify (6 months)</h4>
                <span>Native Android Development</span>
                <p>Hands-on Java mobile app development.</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item right"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <img/>
                <h3>Flutter App Development Internship</h3>
                <span>September 2021 - October 2021</span>
                <h4>Prospecta Technologies (2 months)</h4>
                <span>Flutter App Development</span>
                <p>Hands-on Flutter mobile app development.</p>
              </div>
            </motion.div>

            <motion.div
              className="timeline-item left"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Associate Software Engineer</h3>
                <h4>Pennant Technologies, Visakhapatnam</h4>
                <span>Dec 2021 - Jun 2023</span>
                <p>Java/Spring Boot, ZK, AngularJS/ReactJS, PostgreSQL/Oracle/MySQL. 
                Developed LOS/LMS systems, customized UIs, debugged client issues.</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item right"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>ReactJS & Flutter Developer</h3>
                <span>April 2025 - Till Date</span>
                <h4>CHV APPS</h4>
                <span>Web & Mobile Development</span>
                <p>Hands-on ReactJS and Flutter development.</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item left"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="timeline-dot ai-dot"></div>
              <div className="timeline-content">
                <h3>AI & Data Science Course</h3>
                <span>Nov 2025 - May 2026 (Ongoing)</span>
                <h4>VCube Technologies (6 months)</h4>
                <span>AI/ML Foundation</span>
                <p>Comprehensive AI & Data Science program covering Python, Jupyter Notebook, Anaconda, Spyder IDE, MySQL, and Python Data Structures.</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item right"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="timeline-dot ai-dot"></div>
              <div className="timeline-content">
                <h3>AI Internship</h3>
                <span>Jan 2026 - June 2026 (Ongoing)</span>
                <h4>iStudio Technologies (6 months)</h4>
                <span>AI Practical Training</span>
                <p>Hands-on AI development using Python, Jupyter Notebook, Anaconda, Spyder, MySQL database integration, and advanced Python data structures.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="skills-grid">
          {[
            { name: 'ReactJS / NextJS', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#000000' },
            { name: 'Flutter / Dart', icon: 'https://cdn.simpleicons.org/flutter/02569B', color: '#000000' },
            { name: 'Java Android', icon: 'https://cdn.simpleicons.org/android/3DDC84', color: '#000000' },
            { name: 'AngularJS', icon: 'https://cdn.simpleicons.org/angular/DD0031', color: '#000000' },
            { name: 'Java / Spring Boot', icon: 'https://cdn.simpleicons.org/spring/6DB33F', color: '#000000' },
            { name: 'JPA / JDBC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#000000' },
            { name: 'PostgreSQL / SQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', color: '#000000' },
            { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', color: '#000000' },
            { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', color: '#000000' },
            { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', color: '#000000' },
            { name: 'Jupyter Notebook', icon: 'https://cdn.simpleicons.org/jupyter/F37626', color: '#000000' },
            { name: 'Anaconda', icon: 'https://cdn.simpleicons.org/anaconda/44A833', color: '#000000' },
            { name: 'Spyder IDE', icon: 'https://cdn.simpleicons.org/spyderide/FF0000', color: '#000000' },
            { name: 'Python Data Structures', icon: 'https://cdn.simpleicons.org/python/FFD43B', color: '#000000' },
            { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37', color: '#000000' },
            { name: 'Eclipse', icon: 'https://cdn.simpleicons.org/eclipseide/2C2255', color: '#000000' },
            { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#000000' },
            { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg', color: '#3DDC84' },
            { name: 'JWT Authentication', icon: 'https://cdn.simpleicons.org/jsonwebtokens/000000', color: '#6049ea' },
            { name: 'RESTful APIs', icon: 'https://cdn.simpleicons.org/swagger/85EA2D', color: '#000000' },
            { name: 'Git & GitHub', icon: 'https://cdn.simpleicons.org/github/FFFFFF', color: '#F05032' }
          ].map((skill, i) => (
            <motion.div
              key={skill.name}
              className={`skill-card ${
                skill.name.includes('Python') || skill.name.includes('Jupyter')
                  ? 'ai-skill'
                  : ''
              }`}
              style={{ '--skill-color': skill.color }}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ scale: 1.08, y: -12 }}
            >
              <div
                className="skill-icon"
                style={{ backgroundColor: 'var(--skill-color)' }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="icon-svg"
                  loading="lazy"
                  onError={(e) =>
                    (e.currentTarget.src =
                      'https://cdn.simpleicons.org/code/ffffff')
                  }
                />
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
