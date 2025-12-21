import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section>
      <h1>My Labs</h1>

      <ProjectCard
        title="Lab 7: Kanban Board"
        desc="A task management board built with React."
        tech="React, Vite"
        github="https://github.com/..."
        demo="https://..."
      />
    </section>
  );
}

export default Projects;
