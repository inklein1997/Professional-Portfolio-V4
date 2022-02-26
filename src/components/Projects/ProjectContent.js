import { useState } from 'react';
import classes from './ProjectContent.module.css';


import ProjectCard from './ProjectCard';
import Card from '../UI/Card';

const ProjectContent = () => {
    const [projectSelection ,setProjectSelection] = useState('ProManj')

    const projectSelectionHandler = (e) => {
        setProjectSelection(e.target.innerHTML)
    }

    return (
        <section className={classes.section}>
            <div className={classes.projectList}>
                <Card className={classes.card}><h2>Projects</h2></Card>
                <button onClick={projectSelectionHandler}>ProManj</button>
                <button onClick={projectSelectionHandler}>MoodyFoody</button>
                <button onClick={projectSelectionHandler}>Weather Dashboard</button>
                <button onClick={projectSelectionHandler}>Code Quiz</button>
                {/* <button>Placeholder</button> */}
            </div>
            <ProjectCard selection={projectSelection} className={classes.projectCard} />
        </section>
    )
}

export default ProjectContent