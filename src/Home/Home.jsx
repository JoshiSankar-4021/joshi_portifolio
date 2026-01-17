import { motion } from 'framer-motion';
import './Home.css';

const Home = () => (
  <>

<div className="gradient-overlay"></div>
    <section className="hero">
      <div className="particles"></div>
      <div className="hero-grid">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Joshi Sankar
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Full Stack Web & Mobile Developer
          </motion.h2>
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.6 }}
>
  Visakhapatnam-based full-stack developer crafting stunning{' '}
  <span className="highlight">React web platforms</span> and{' '}
  <span className="highlight">Flutter mobile apps</span> with pixel-perfect
  UI/UX across iOS, Android, and web.
</motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.a 
              href="/projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              View Work
            </motion.a>
            <motion.a 
              href="/contact" 
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <img src="/assets/developer_images.png" alt="Profile" />
        </motion.div>
      </div>
    </section>
  </>
);

export default Home;
