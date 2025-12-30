import { useRef, useEffect, useState } from "react";
import styles from "./Home.module.css";
import profilePic from "../assets/profile.jpg";
import { FaLinkedin, FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [homeVisible, setHomeVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const text = {
    en: {
      tagline: "Frontend & React Developer",
      bio: "Passionate Computer Science student with hands-on experience in React, web development, and modern JavaScript frameworks.",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      about: "About Me",
    },
    fr: {
      tagline: "Développeuse Frontend & React",
      bio: "Étudiante en informatique passionnée par le développement web, avec une expérience pratique en React et technologies modernes.",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      about: "À propos",
    },
  };

  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "Python", "PHP", "Java", "C++", "HTML", "CSS"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "Laravel", "Bootstrap", "Tailwind CSS"],
    },
    {
      category: "AI & Data Science Tools",
      items: ["Jupyter Notebook", "Anaconda", "TensorFlow (Basics)", "Scikit-learn", "Pandas", "NumPy"],
    },
    {
      category: "Design & Prototyping",
      items: ["Canva", "Figma", "UI/UX Design"],
    },
    {
      category: "Development Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "XAMPP", "phpMyAdmin"],
    },
    {
      category: "Databases",
      items: ["MySQL", "SQLite"],
    },
  ];


  useEffect(() => {
    const options = { threshold: 0.2 };
    const observe = (ref, setter) => {
      const obs = new IntersectionObserver(([entry]) => setter(entry.isIntersecting), options);
      if (ref.current) obs.observe(ref.current);
      return obs;
    };
    const homeObs = observe(homeRef, setHomeVisible);
    const projObs = observe(projectsRef, setProjectsVisible);
    const skillsObs = observe(skillsRef, setSkillsVisible);
    const contactObs = observe(contactRef, setContactVisible);

    return () => {
      homeObs.disconnect();
      projObs.disconnect();
      skillsObs.disconnect();
      contactObs.disconnect();
    };
  }, []);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  return (
    <div className={`${darkMode ? styles.dark : ""}`}>
      {/* Top Controls */}
      <div className={styles.topControls}>
        <button className={styles.iconBtn} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button className={styles.iconBtn} onClick={() => setLanguage(language === "en" ? "fr" : "en")}>
          {language === "en" ? "FR" : "EN"}
        </button>
        <button className={styles.iconBtn} onClick={() => setSidebarOpen(!sidebarOpen)}>
          ☰
        </button>
      </div>

      {/* Sidebar Left */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={() => setSidebarOpen(false)}>✕</button>
        <p onClick={() => scrollTo(homeRef)}>🏠 Home</p>
        <p onClick={() => scrollTo(projectsRef)}>📁 {text[language].projects}</p>
        <p onClick={() => scrollTo(skillsRef)}>🛠 {text[language].skills}</p>
        <p onClick={() => scrollTo(contactRef)}>📞 {text[language].contact}</p>
        <p>👩‍💻 {text[language].about}</p>
      </div>

      {/* Home Section */}
      <section ref={homeRef} className={`${styles.home} ${homeVisible ? styles.fadeSlide : ""}`}>
        <img src={profilePic} alt="Soundous BENSAAD" className={`${styles.photo} ${homeVisible ? styles.fromLeft : ""} ${homeVisible ? styles.fadeSlide : ""}`} />
        <h1 className={`${styles.title} ${homeVisible ? styles.fromRight : ""} ${homeVisible ? styles.fadeSlide : ""}`}>Soundous BENSAAD</h1>
        <h2 className={`${styles.tagline} ${homeVisible ? styles.fromLeft : ""} ${homeVisible ? styles.fadeSlide : ""}`}>{text[language].tagline}</h2>
        <p className={`${styles.bio} ${homeVisible ? styles.fromRight : ""} ${homeVisible ? styles.fadeSlide : ""}`}>{text[language].bio}</p>
        <div className={styles.btns}>
          <button onClick={() => scrollTo(projectsRef)} className={styles.btn}>Projects</button>
          <button onClick={() => scrollTo(skillsRef)} className={styles.btn}>Skills</button>
          <button onClick={() => scrollTo(contactRef)} className={styles.btn}>Contact</button>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className={styles.projects}>
        <h2 className={styles.heading}>My Projects</h2>
        <div className={styles.grid}>
          <div
  className={`${styles.card} ${projectsVisible ? styles.fromLeft : ""} ${
    projectsVisible ? styles.fadeSlide : ""
  }`}
>
  <h3>Lab 7: Kanban Board</h3>

  <p>
    A task management web application using a Kanban workflow
    (To Do, In Progress, Done) with drag-and-drop functionality.
  </p>

  <div className={styles.techStack}>
    <span>React</span>
    <span>Vite</span>
  </div>

  <div className={styles.links}>
    <a
      href="https://github.com/soundousbensaad/Lab7-Kanban-Board"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>

    <a
      href="https://lab7-kanban.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo
    </a>
  </div>
</div>
          <div className={`${styles.card} ${projectsVisible ? styles.fromRight : ""} ${projectsVisible ? styles.fadeSlide : ""}`}>
            <h3>Lab 6: Portfolio</h3>
            <p>My portfolio site</p>
            <span>React, Vite</span>
          </div>
          <div className={`${styles.card} ${projectsVisible ? styles.fromLeft : ""} ${projectsVisible ? styles.fadeSlide : ""}`}>
            <h3>PFE: AI Laboratory Website</h3>
            <p>Patient services & AI-driven scan classification</p>
            <span>React, Laravel, PHP, AI</span>
          </div>
          <div
  className={`${styles.card} ${projectsVisible ? styles.fromRight : ""} ${
    projectsVisible ? styles.fadeSlide : ""
  }`}
>
  <h3>Master PFE Management Platform</h3>
  <p>
    Web platform connecting teachers and students for proposing, applying,
    assigning, and managing Master 2 final-year projects.
  </p>
  <span>React, Laravel, MySQL</span>
</div>
<div
  className={`${styles.card} ${projectsVisible ? styles.fromLeft : ""} ${
    projectsVisible ? styles.fadeSlide : ""
  }`}
>
  <h3>Local Algerian Restaurants App</h3>
  <p>
    Mobile app that helps users discover Algerian restaurants, rate them,
    and read reviews from other clients.
  </p>
  <span>Flutter, Firebase, SQL</span>
</div>

        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className={styles.skills}>
        <h2 className={styles.heading}>Skills & Technologies</h2>
        <div className={styles.skillsList}>
          {skills.map((skill, idx) => (
            <div key={idx} className={`${styles.category} ${skillsVisible ? styles.fadeSlide : ""} ${idx % 2 === 0 ? styles.fromLeft : styles.fromRight}`} style={{ transitionDelay: `${idx * 0.2}s` }}>
              <h3>{skill.category}</h3>
              <p>{skill.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
   {/* Contact Section */}
      <section ref={contactRef} className={styles.contact}>
        <h2 className={styles.heading}>Contact Me</h2>
        <div className={styles.contactList}>
          {[
            { icon: <MdEmail />, text: "Personal: soundousbensaad@gmail.com", link: "mailto:soundousbensaad@gmail.com" },
            { icon: <MdEmail />, text: "University: soundous.bensaad@univ-constantine2.dz", link: "mailto:soundous.bensaad@univ-constantine2.dz" },
            { icon: <FaLinkedin />, text: "linkedin.com/in/soundousbensaad", link: "https://linkedin.com/in/soundousbensaad" },
            { icon: <FaInstagram />, text: "@soundous.bensaad", link: "https://www.instagram.com/s_n_d_s_ben?igsh=dXVheHMxdmM3aTF6&utm_source=qr" },
            { icon: <FaFacebook />, text: "facebook.com/soundous.bensaad", link: "https://facebook.com/soundous.bensaad" },
            { icon: <FaPhone />, text: "+213 551817219", link: "tel:+213551817219" }
          ].map((item, idx) => (
            <p
              key={idx}
              className={`${styles.contactItem} ${contactVisible ? styles.fadeSlide : ""} ${idx % 2 === 0 ? styles.fromLeft : styles.fromRight}`}
              style={{ transitionDelay: `${idx * 0.2}s` }}
            >
              {item.icon}
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
              ) : (
                <span>{item.text}</span>
              )}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
