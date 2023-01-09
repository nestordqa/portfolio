import {NextComponentType} from 'next';
import styles from '../../styles/Hello.module.css'

const Hello : NextComponentType = () =>{
    return(
    <>
        <div className={styles.container}>
            <p className={styles.paragraf}>
                <span>Hey! Nice to meet you, I'm {'<NestorQuiñones/>'}.</span><br/>
                Focused Full Stack Web Developer building Websites and Web Applications 
                that leads to the success of the overall product
            </p>
        </div>
    </>
    );
};
export default Hello;