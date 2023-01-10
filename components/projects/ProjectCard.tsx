import Content from './Content';
import Image from 'next/image';
import {ProjectProps} from '../../app/types';
import styles from '../../styles/ProjectCard.module.css';
import advices from '/public/advices.png';
import calculator from '/public/calculator.png';
import pawsitive from '/public/pawsitive.png';
import todoapp from '/public/todoapp.png';

const ProjectCard = ({name, content, deploy, repository, img, index}:ProjectProps) =>{
    let url : any = '';
    if(name == 'Pawsitive App') url = pawsitive;
    if(name == 'Calculator App') url = calculator;
    if(name == 'TO DO App') url = todoapp;
    if(name == 'Advices App') url = advices;
    if(name == 'Sotark Games.') url = '';

    const style = {
        borderRadius:'15px'
    }
    return(
        
    <>
        <div className={styles.container}>
            <div className={index % 2 == 0 || index == 0 ? styles.photo : styles.content}>
                {index % 2 == 0 || index == 0 ? 
                    <Image 
                        src={url} 
                        alt={name} 
                        width={180} 
                        height={220}
                        style={style}
                    /> 
                : 
                    <Content 
                        name={name}
                        content={content} 
                        deploy={deploy} 
                        repository={repository}
                    />
                }
                
            </div>
            <div className={index % 2 == 0 || index == 0 ? styles.content : styles.photo}>
                {index % 2 == 0 || index == 0 ? 
                    <Content 
                        name={name}
                        content={content} 
                        deploy={deploy} 
                        repository={repository}
                    />
                    : 
                    <Image 
                        src={url} 
                        alt={name} 
                        width={180} 
                        height={220}
                        style={style}
                    /> 
                }
            </div>
        </div>
    </>
    );
};

export default ProjectCard;
