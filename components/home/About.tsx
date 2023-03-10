import {NextComponentType} from 'next';
import Card from './Card';
import styles from '../../styles/About.module.css';
import { animateScroll as scroll } from "react-scroll";


const About : NextComponentType = () =>{
    const tech : string[] = ['JAVASCRIPT', 'TYPESCRIPT', 'REACT', 'NEXT.js', 'REDUX', 'NODE.js', 'EXPRESS.js', 'POSTGRESQL', 'SEQUELIZE.js', 'PRISMA', 'SCRUM', 'GIT', 'GITHUB'];
    const soft : string[] = ['COMMUNICATION', 'ANALYSIS CAPACITY', 'PROBLEM RESOLUTION', 'LEADERSHIP', 'TEAM WORK', 'RESILIENCE', 'CREATIVITY'];
    const onScroll = ()=>{
        scroll.scrollToTop();
    };
    return(
    <>
    <div className={styles.container} id='smooth-link'>
        <div className={styles.about}>
            <div className={styles.aboutContainer}>
                <p>                
                As I said, I&apos;m a <span className={styles.span}>Full Stack Web Developer</span>, I build Websites and Web Applications 
                that leads to the success of the overall product.  Check out some of my work in the <span className={styles.span}>Projects section</span>.<br/><br/>
                I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <span className={styles.span}>Linkedin</span> where I post useful content related to Web Development and Programming.<br/><br/>

                I&apos;m open to Job oportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to <span className={styles.span}>contact me</span> by the way you prefer, on <span className={styles.span}>sidebar</span> you are going to find all ways to contact me!
                </p>
            </div>
            <div className={styles.button} onClick={()=>onScroll()}>
                Go up!             
            </div>

        </div>
        <div className={styles.stack}>
            <div className={styles.skill}>
            <h2>const TechSkills = {'( ) =>'}</h2>
                {tech.map((tech, index)=>{
                    return<Card name={tech} key={index}/>
                })}
            </div>
            <div className={styles.skill}>
            <h2>const SoftSkills = {'( ) =>'}</h2>
                {soft.map((tech, index)=>{
                        return<Card name={tech} key={index}/>
                    })}
            </div>
        </div>
    </div>

    </>
    );
};

export default About;
