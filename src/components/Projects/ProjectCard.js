import Card from '../UI/Card'

import classes from './ProjectCard.module.css'
import githubBlock from '../../assets/images/contact-blocks/github-block.png';
import webBlock from '../../assets/images/contact-blocks/websitelogo.png';

import codeQuizImg from '../../assets/images/project-screenshots/JavaScript-Quiz.gif'
import weatherDashboardImg from '../../assets/images/project-screenshots/Weather-Dashboard.gif'
import MoodyFoodyImg from '../../assets/images/project-screenshots/MoodyFoody.gif'
import KeepUPImg from '../../assets/images/project-screenshots/KeepUP.png'

const projectData = [
    {
        title:'ProManj',
        description:'A Visual Management Work tool that provides task management, chat, and notekeeping.',
        technologies:['Handlebars','JavaScript','socket.io','CSS3'],
        deployedLink:'',
        githubLink:'',
        img_url:KeepUPImg,
    },
    {
        title:'MoodyFoody',
        description:'A restaurant filter and locator',
        technologies:['Materialize','Google Cloud Platform','Yelp API'],
        deployedLink:'',
        githubLink:'',
        img_url:MoodyFoodyImg,
    },
    {
        title:'Weather Dashboard',
        description:'A dashboard that displays weather details in any city',
        technologies:['JavaScript','Bootstrap','OpenWeatherMap'],
        deployedLink:'',
        githubLink:'',
        img_url:weatherDashboardImg,
    },
    {
        title:'Code Quiz',
        description:'',
        technologies:['JavaScript','Local Storage','CSS3','HTML5'],
        deployedLink:'',
        githubLink:'',
        img_url:codeQuizImg,
    }
]

const ProjectCard = (props) => {
    console.log(props.selection)

    const selectProject = () => {
        switch (props.selection) {
            case 'ProManj':
                return projectData[0];
            case 'DevMorns':
                return projectData[1];
            case 'Weather Dashboard':
                return projectData[2];
            case 'Code Quiz':
                return projectData[3];
        }
    }

    console.log(selectProject().description)

    return <Card className={classes.card}>
        <div className={classes.projectDetailContainer}>
                    <img className={classes.projectImage} 
                    src={selectProject().img_url} />
                    <div className={classes.projectDetails}>
                        <h2>{selectProject().title}</h2>
                        <hr />
                        <div>{selectProject().description}</div>
                        <hr />
                        <h3>Technologies:</h3>
                        <ul>
                            {selectProject().technologies.map(item => <li>{item}</li>)}
                        </ul>
                        <div className={classes.linkBlocks}>
                            <img src={githubBlock} />
                            <img src={webBlock} />
                        </div>
                    </div>
                </div>
    </Card>
}

export default ProjectCard