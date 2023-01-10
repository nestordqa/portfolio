import { NextComponentType } from 'next';
import {projects} from '../../app/projects';
import ProjectCard from './ProjectCard';
import styles from '../../styles/Projects.module.css'
import Contact from './Contact';

const ProjectsList : NextComponentType = () =>{
    return(
    <>
    <div className={styles.container}>
        
        {projects.map((project, index)=>{
            return(<ProjectCard 
                name={project.name} 
                content={project.content}
                deploy={project.deploy}
                repository={project.repository}
                img={project.img}
                index={index}
                key={index}
                />
                )
        })
        }
        <Contact/>
    </div>
    </>
    );
};

export default ProjectsList;