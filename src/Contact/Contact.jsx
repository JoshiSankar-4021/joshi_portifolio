import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import profile from "../assets/formals.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: "https://www.linkedin.com/favicon.ico",
      url: "https://www.linkedin.com/in/joshi-sanakar-telaprolu-34a68b1bb"
    },

    {
      icon: "https://img.icons8.com/ios-filled/50/ffffff/github.png",
      url: "https://github.com/JoshiSankar-4021"
    },

    {
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      url: "https://www.instagram.com/joshisankar_5051/"
    },

    {
      icon: "https://www.facebook.com/favicon.ico",
      url: "https://www.facebook.com/sankar.joshi.9828/"
    },
  ];

  return (
    <section className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Let’s connect! I’m open to projects and collaborations, and 
          always eager to learn new technologies while sharing knowledge through discussions and hands-on work.
          If you’re interested in building, learning, or teaching together, feel free to reach out.
        </p>

        <div className="contact-grid">
          <div className="contact-info-wrapper">
            <div className="profile-column">
              <img
                src={profile}
                alt="Profile"
                className="contact-profile-image"
              />
              <h3 className="contact-profile-name">
                Joshi Sankar Telaprolu
              </h3>
            </div>
            <div className="contact-info">
              <br />
              <div className="info-item">
                <span>📞 Phone</span>
                <p>+91 9347175051</p>
              </div>

              <div className="info-item">
                <span>📧 Email</span>
                <p>joshisankar5051@gmail.com</p>
              </div>

              <div className="social-links">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.url.split('/')[2]}
                  >
                    <img 
                      src={social.icon} 
                      alt="Social icon"
                      className="social-icon"
                      width="64" 
                      height="64"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
