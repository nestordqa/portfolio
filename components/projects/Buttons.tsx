import Link from 'next/link';
import {ButtonProps} from '../../app/types'
import styles from '../../styles/Buttons.module.css';


const Buttons = ({deploy, repository}:ButtonProps)=>{
    const style={
        textDecoration: 'none'
    }
    return(
    <>
        <div className={styles.container}>
            
            <div className={styles.buttonContainer}>
                <Link href={deploy} target='_blank' style={style}>
                    <div className={styles.button}>
                        Deploy
                    </div>                    
                </Link>
            </div>
            <div className={styles.buttonContainer}>
                <Link href={repository} target='_blank' style={style}>
                    <div className={styles.button}>
                        Repository
                    </div> 
                </Link>
            </div>
        </div>
    </>
    );
};

export default Buttons;