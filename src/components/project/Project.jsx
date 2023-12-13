import { Link } from "react-router-dom";

const Project = ({title, img, slug}) => {
  return (
    <li className="project">
      <Link to={slug}>
        <img src={img} alt="title" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </Link>
    </li>
  );
}
 
export default Project;