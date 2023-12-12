const Project = ({title, img, slug}) => {
  return (
    <li className="project">
      <a href={slug}>
        <img src={img} alt="title" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
}
 
export default Project;