import {NextComponentType} from 'next';
import styles from '../../styles/ProjectCard.module.css';


const Contact : NextComponentType= () =>{

    return(
        
    <>
        <div className={styles.containerContact}>
            <div className={styles.contentContact}>
                <div className={styles.title}>
                    <h3>Hi there, again!</h3>
                </div>
                <div className={styles.contact}>
                    <p>
                        I really hope you like this portfolio, it was developed
                        just with <span>NextJS and CSS Pure </span> (And a lot of love!).
                        If you have any question or suggestion about my projects,
                        <span> contact me</span> by the way you prefer, on the <span>left sidebar</span> you have all ways!
                    </p>
                </div>
                <div className={styles.force}>
                    <h4>
                        May the force be with you!
                    </h4>
                </div>      
            </div>
        </div>
    </>
    );
};

export default Contact;