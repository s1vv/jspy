import { useParams } from 'react-router-dom';
import projects from '../data/projectList';
import BtnGitHub from '../btnGitHub/BtnGitHub';

function Project() {
  const { slug } = useParams();
  const project = projects[slug];
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">{project.title}</h1>

          <img src={project.imgBig} alt={project.title} className="project-details__cover" />

          <div className="project-details__desc">
            <p>
              Skills:
              {project.skills}
            </p>
          </div>
          <BtnGitHub link={project.gitHubLink} />

        </div>
      </div>
    </main>
  );
}

export default Project;
