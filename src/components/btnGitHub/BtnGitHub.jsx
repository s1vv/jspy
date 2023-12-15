/* eslint-disable react/prop-types */
import gitHubIcon from '../../img/icons/gitHub-black.svg';

function BtnGitHub({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="gitHubIcon" />
      GitHub repo
    </a>
  );
}

export default BtnGitHub;
