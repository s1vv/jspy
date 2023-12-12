import { useParams } from "react-router-dom";
import projects from "./../data/projectList"
import BtnGitHub from "../btnGitHub/BtnGitHub";

const Project = () => {
  const { slug } = useParams()
  const project = projects[slug]
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">{project.title}</h1>

          <img src={project.imgBig} alt={project.title} className="project-details__cover" />

          <div className="project-details__desc">
              <p>Skills: {project.skills}</p>
          </div>
            <BtnGitHub link="https://www.youtube.com/watch?v=Iz1NvqG7wTc&list=LL&index=2&t=5266s"/>

        </div>
      </div>
    </main>
  );
}
 
export default Project;