import Project from '../project/Project';
import projects from '../data/projectList';

function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Мои проекты</h2>
        <ul className="projects">

          {Object.values(projects).map((project) => (
            <Project
              key={project.slug}
              title={project.title}
              img={project.img}
              slug={project.slug}
              link={project.gitHubLink}
            />
          ))}

        </ul>
      </div>
    </main>
  );
}

export default Projects;
