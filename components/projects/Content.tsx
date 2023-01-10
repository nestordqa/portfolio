import {ContentProps} from '../../app/types';
import styles from '../../styles/Content.module.css';
import Buttons from './Buttons';

const Content = ({name, content, deploy, repository}:ContentProps) =>{
    return(
    <>
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{name}</h2>
            </div>
            <div className={styles.content}>
                {
                    content.map((cont, index)=>{
                        return(<li key={index}>{cont}</li>)
                    })
                }
            </div>
        </div>
        <div className={styles.buttons}>
            <Buttons deploy={deploy} repository={repository}/>
        </div>
    </>
    );
};
export default Content;