import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable websites using modern technologies like React, Next.js, and Node.js.",
    icon: "/assets/webdevelopment.png",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating high-performance Android and iOS applications with smooth UI and reliable backend integration.",
    icon: "/assets/mobiledevelopment.png",
  },

  {
    title: "Portfolio Designing",
    description:
      "Designing stunning, responsive portfolio sites with modern React/Next.js, animations, and optimized performance.",
    icon: "/assets/portfolio.png",  // or "/assets/portfolio.png"
  },

  {
    title: "Professional Training on My Tech Stack",
    description:
      "End-to-end professional training service focused on our real-world tech stack. Designed to upskill students, developers, and teams through hands-on projects, production-level practices, and industry-standard workflows used in live applications.",
    icon: "/assets/training.png",
    featured: true,
  },

  {
    title: "Generative AI Solutions",
    description:
      "Developing AI-powered applications including chatbots, content generation, and smart automation systems.",
    icon: "/assets/artificialintelligence.png",
    featured: true,
  },
  {
    title: "AI Agents & Automation ChatBots",
    description:
      "Designing intelligent AI agents to automate workflows, customer support, and business operations.",
    icon: "/assets/chatbot.png",
    featured: true,
  },
  {
    title: "Digital Marketing",
    description:
      "Helping brands grow online through SEO, social media marketing, paid ads, and content strategy.",
    icon: "/assets/digitalmarketing.png",
  },
  {
    title: "Startup & SaaS Consulting",
    description:
      "Providing technical guidance, MVP development, and architecture planning for startups and SaaS products.",
    icon: "/assets/startup1.png",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">My Services</h2>
      <p className="services-subtitle">
        What I can build for you using modern technologies
      </p>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            className={`service-card ${service.featured ? "featured" : ""}`}
            key={index}
          >
            <div className="service-icon">
              {typeof service.icon === "string" &&
              service.icon.startsWith("/") ? (
                <img
                  src={service.icon}
                  alt={service.title}
                  className="service-icon-img"
                />
              ) : (
                service.icon
              )}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
