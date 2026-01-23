import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Web Development",
    description:
      "Building responsive, scalable web applications using React, Next.js, and modern UI/UX best practices.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description:
      "Developing Android and Flutter applications including social, utility, and business-focused apps.",
    icon: "📱",
  },
  {
    title: "Backend & APIs",
    description:
      "Designing secure, high-performance REST APIs using Node.js or Spring Boot with SQL and NoSQL databases.",
    icon: "⚙️",
  },
  {
    title: "Deployment & Integrations",
    description:
      "Application deployment, Firebase integrations, cloud storage setup, and test builds (APK & internal testing).",
    icon: "🚀",
  },
  {
    title: "Portfolio Development & Maintenance",
    description:
      "Creating professional developer portfolios with modern UI, performance optimization, SEO, and ongoing maintenance.",
    icon: "🎨",
  },
  {
    title: "Generative AI Solutions",
    description:
      "Building AI-powered features using Large Language Models for chat, content generation, and intelligent workflows.",
    icon: "🧠",
  },
  {
    title: "AI Agents & Automation",
    description:
      "Designing autonomous AI agents for task automation, API orchestration, data processing, and smart decision-making.",
    icon: "🤖",
  },
  {
    title: "IoT & AI-Based Development",
    description:
      "Developing smart IoT solutions integrated with AI for real-time monitoring, automation, predictive insights, and connected systems.",
    icon: "📡",
  },
];


const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Services</h2>
      <p className="services-subtitle">
        What I can help you build
      </p>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
