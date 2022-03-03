import { useState, Fragment } from 'react';
import classes from './ProjectContent.module.css';

import Card from '../UI/Card'

import githubBlock from '../../assets/images/contact-blocks/github-block.png';
import webBlock from '../../assets/images/contact-blocks/websitelogo.png';

import codeQuizImg from '../../assets/images/project-screenshots/JavaScript-Quiz.gif'
import weatherDashboardImg from '../../assets/images/project-screenshots/Weather-Dashboard.gif'
import MoodyFoodyImg from '../../assets/images/project-screenshots/MoodyFoody.gif'
import KeepUPImg from '../../assets/images/project-screenshots/KeepUP.png'

const projectData = [
    {
        title: 'ProManj',
        description: 'A Visual Management Work tool that provides task management, chat, and notekeeping.',
        technologies: ['Handlebars', 'JavaScript', 'socket.io', 'CSS3'],
        deployedLink: 'https://keepup-project-management.herokuapp.com/',
        githubLink: 'https://github.com/inklein1997/ProManj',
        img_url: KeepUPImg,
    },
    {
        title: 'MoodyFoody',
        description: 'A restaurant filter and locator',
        technologies: ['Materialize', 'Google Cloud Platform', 'Yelp API'],
        deployedLink: 'https://inklein1997.github.io/MoodyFoody/',
        githubLink: 'https://github.com/inklein1997/MoodyFoody',
        img_url: MoodyFoodyImg,
    },
    {
        title: 'Weather Dashboard',
        description: 'A dashboard that displays weather details in any city',
        technologies: ['JavaScript', 'Bootstrap', 'OpenWeatherMap'],
        deployedLink: 'https://inklein1997.github.io/Weather-Dashboard/',
        githubLink: 'https://github.com/inklein1997/Weather-Dashboard',
        img_url: weatherDashboardImg,
    },
    {
        title: 'Code Quiz',
        description: 'A front end application that quizzes the user regarding JavaScript methods and fundamentals.',
        technologies: ['JavaScript', 'Local Storage', 'CSS3', 'HTML5'],
        deployedLink: 'https://inklein1997.github.io/Javascript-Quiz/',
        githubLink: 'https://github.com/inklein1997/Javascript-Quiz',
        img_url: codeQuizImg,
    }
]

const ProjectContent = () => {

    return (
        <section className={classes.section}>
            <div className={classes.projectsHeader}>
                <h1>Projects</h1>
                <h2>Scroll down to view all projects</h2>
            </div>
            <div className={classes.projectsList}>
                {projectData.map(project => <Card className={classes.card}>
                        <img src={project.img_url} />
                        <div className={classes.projectDetailsContainer}>
                            <div className={classes.projectDetails}>
                                <h2>{project.title}</h2>
                                <hr />
                                <h3>{project.description}</h3>
                                <hr />
                                <h3>Technologies:</h3>
                                <h4>{project.technologies.join(', ')}</h4>
                            </div>
                            <div className={classes.linkBlocks}>
                                <a href={project.githubLink}><img src={githubBlock} /></a>
                                <a href={project.deployedLink}><img src={webBlock} /></a>
                            </div>
                        </div>
                    </Card>
                )}
            </div>
        </section>
    )
}

export default ProjectContent