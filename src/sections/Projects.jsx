import styles from "./Projects.module.css";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const labs = [
    {
      title: "Lab 7: Kanban Board",
      desc: "Task management app for organizing projects",
      tech: "React, Vite, CSS Modules",
      github: "https://github.com/soundousbensaad/lab7-kanban",
      demo: "https://lab7-kanban.vercel.app"
    },
    {
      title: "Lab 6: Portfolio",
      desc: "Personal portfolio website showcasing skills",
      tech: "React, Vite, CSS Modules",
      github: "https://github.com/soundousbensaad/portfolio"
    },
    // Add more labs here...
  ];

  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>My Labs & Projects</h2>
      <div className={styles.grid}>
        {labs.map((lab, index) => (
          <ProjectCard
            key={index}
            title={lab.title}
            desc={lab.desc}
            tech={lab.tech}
            github={lab.github}
            demo={lab.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
