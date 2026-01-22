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
                <img src={appriLogo} alt="Apprify Logo" 
                style={{
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-6uR2SDszyhxMGMSfQe4Ir9JHE-xy6_KIQ&s" 
                alt="Prospecta Technologies Logo"
                style={{
                width: '250px',
                height: '100px',
                borderRadius: '20px',  // Medium pill shape; use '50%' for full oval
                backgroundColor: '#6049ea',  // Optional: visible fill from your portfolio theme
                border: '1px solid rgba(96, 73, 234, 0.4)'  // Matches education/timeline borders
              }}/>
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
                <img src="data:image/png;base64,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"
                  alt="Pennant Technologies Logo"
                  style={{
                  width: '350px',
                  height: '100px',
                  borderRadius: '20px',  // Medium pill shape; use '50%' for full oval
                  backgroundColor: '#6049ea',  // Optional: visible fill from your portfolio theme
                  border: '1px solid rgba(96, 73, 234, 0.4)'  // Matches education/timeline borders
                }}/>
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
                <img src="https://chvapps.in/images/Logo1.webp"
                alt='CHV APPS LOGO'
                style={{
                  width: '200px',
                  height: '100px',
                  borderRadius: '20px',  // Medium pill shape; use '50%' for full oval
                  backgroundColor: '#6049ea',  // Optional: visible fill from your portfolio theme
                  border: '1px solid rgba(96, 73, 234, 0.4)'  // Matches education/timeline borders
                }}/>
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
