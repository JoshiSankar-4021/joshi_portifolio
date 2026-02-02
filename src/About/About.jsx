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

          <a
            href="https://drive.google.com/uc?export=download&id=1pfnvDn6169aV4hr_1ss5cxs-47zJnsQF" 
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button className='downloadbutton'>
            Resume
            </motion.button>
          </a>

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
                width: '200px',
                height: '100px',
                borderRadius: '20px',
                backgroundColor: '#6049ea',
                border: '1px solid rgba(96, 73, 234, 0.4)'
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
                width: '200px',
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
                  width: '200px',
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
                <img src="data:image/png;base64,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"
                alt="VCUBE Software Soluttions"
                style={{
                  width: '200px',
                  height: '100px',
                  borderRadius: '20px',  // Medium pill shape; use '50%' for full oval
                  backgroundColor: '#6049ea',  // Optional: visible fill from your portfolio theme
                  border: '1px solid rgba(96, 73, 234, 0.4)'  // Matches education/timeline borders
                }}/>
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
                <img src="https://internshipstudio.com/assets/logo_black.png" alt="iStudio Technologies" 
                style={{
                  width: '200px',
                  height: '100px',
                  borderRadius: '20px',
                  backgroundColor: '#ffff',
                  border: '1px solid rgba(96, 73, 234, 0.4)'
                }}
                />
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
