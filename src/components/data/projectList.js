import downloader from '../../img/projects/downloader.jpg';
import task from '../../img/projects/task.jpg';
import reactSite from '../../img/projects/reactSite.jpg';
import downloaderBig from '../../img/projects/downloaderBig.jpg';
import taskBig from '../../img/projects/taskBig.jpg';
import reactSiteBig from '../../img/projects/reactSiteBig.jpg';

const projects = {
  'js-tasks': {
    title: 'JavaScript tasks',
    skills: 'Jest, Node.js',
    img: task,
    imgBig: taskBig,
    slug: 'js-tasks',
    gitHubLink: 'https://github.com',
  },
  react: {
    title: 'React site',
    skills: 'React, Node.js, Doker',
    img: reactSite,
    imgBig: reactSiteBig,
    slug: 'react',
    gitHubLink: 'https://github.com',
  },
  'youtube-app': {
    title: 'Youtube downloader app',
    skills: 'Python',
    img: downloader,
    imgBig: downloaderBig,
    slug: 'youtube-app',
    gitHubLink: 'https://github.com',
  },
};

export default projects;
