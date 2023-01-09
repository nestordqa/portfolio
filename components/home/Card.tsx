import {props} from '../../app/types';
import styles from '../../styles/Card.module.css';

const Card = ({name}:props) =>{
    return(
    <>
        <div className={styles.container}>
            {name}
        </div>
    </>
    );
};

export default Card;