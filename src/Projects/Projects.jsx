import React, { useEffect, useState } from "react";
import "./Project.css";

/* TopicReactor images */
import profile from "../assets/topicreator/profile.png";
import topiccreator from "../assets/topicreator/topiccreator.png";
import topics from "../assets/topicreator/topics.png";
import comments from "../assets/topicreator/mycommentsweb.png";
import mytopicsweb from "../assets/topicreator/mytopicsweb.png";
import allusers from "../assets/topicreator/allusers.png";

import topiccreatorapp from "../assets/topicreactorapp/Topic_Creator.png";
import drawer from "../assets/topicreactorapp/Drawer.png";
import registration from "../assets/topicreactorapp/registation_app_topicreactor.png";
import mytopics from "../assets/topicreactorapp/MyTopics.png";
import appprofile from "../assets/topicreactorapp/Profile.png";
import topicreactorlogin from "../assets/topicreactorapp/topicreactorlogin.png";
import appstopic from "../assets/topicreactorapp/topics.png";

import home from "../assets/home_decor/home.png";
import about from "../assets/home_decor/about.png";
import products from "../assets/home_decor/products.png";
import stores from "../assets/home_decor/stores.png";
import contact from "../assets/home_decor/contact.png"

/* ================================
   PROJECT DATA
================================ */

const projects = [
  {
    title: "TopicReactor",
    images: [profile, topiccreator, topics,comments,mytopicsweb,allusers],
    description: "Fun social web app for topics & comments. Twitter-style chat!",
    technologies: "React, Node.js, PostgreSQL",
    category: "Web App",
    liveUrl: "https://topicreactorreact.vercel.app/",
    githubFrontend: "https://github.com/JoshiSankar-4021/topicreactorreact.git",
    githubBackend: "https://github.com/JoshiSankar-4021/topicreactorbackendnextjs.git",
  },
  {
    title: "TOPIC REACTOR APP(FLUTTER)",
    images: [registration, drawer, mytopics, appprofile, topiccreatorapp, topicreactorlogin, appstopic],
    description: "A productivity app to manage tasks and deadlines efficiently.",
    technologies: "React Native, Firebase",
    category: "Mobile App",
    playStore: "https://play.google.com/store/apps/details?id=com.taskmaster",
  },
  {
    title: "Home decor",
    images: [home,about,products,stores,contact],
    description: "This is a static website displaying all the home decorations",
    technologies: "React.js,Next.js",
    category: "WEB SITE",
    liveUrl: "https://hoemesdecorations.vercel.app/",
    githubFrontend: "https://github.com/JoshiSankar-4021/home_decor.git",
    githubBackend: "https://github.com/JoshiSankar-4021/emailsenderhomedecor.git",
  },
];

/* ================================
   PROJECT CARD
================================ */

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <div className="project-card">
      <span className="category-badge">{project.category}</span>

      {/* Image display */}
      <div className="project-image-wrapper">
        <img
          src={project.images[currentImage]}
          alt={project.title}
          className={`project-img ${
            project.category === "Mobile App" ? "mobile-img" : ""
          }`}
        />
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <p className="tech">
        <strong>Tech:</strong> {project.technologies}
      </p>

      <div className="project-links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            🌐 Live
          </a>
        )}
        {project.playStore && (
          <a href={project.playStore} target="_blank" rel="noopener noreferrer">
            📱 Play Store
          </a>
        )}
        {project.githubFrontend && (
          <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer">
            💻 FE
          </a>
        )}
        {project.githubBackend && (
          <a href={project.githubBackend} target="_blank" rel="noopener noreferrer">
            💾 BE
          </a>
        )}
        {project.videoDemo && (
          <a href={project.videoDemo} target="_blank" rel="noopener noreferrer">
            🎬 Demo
          </a>
        )}
      </div>
    </div>
  );
}

/* ================================
   PROJECTS SECTION (NO CATEGORY DIVISION)
================================ */

export default function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
