import {NextComponentType} from 'next';
import styles from '../../styles/Navbar.module.css'
import Link from 'next/link';
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";

const Navbar : NextComponentType = ()=>{
    const style ={
        color: 'white',
        textDecoration: 'none'
    }
    const icon = {
        color: 'white',
        backgroundColor:'transparent',
        marginLeft:5,
    }
    return (
      <nav className={styles.nav}>

        <div className={styles.title}>
            <Link href='/' style={style}>
                <h1>
                    {'<NéstorQ/>'}
                </h1>      
            </Link>
        </div>

        <div className={styles.links}>

            <Link href='/' style={style}>
                <div className={styles.link}>
                    <div>
                        // home
                    </div>                 
                    <AiOutlineHome size={25} style={icon}/>
                </div>
            </Link>

            <Link href='projects' style={style}>
                <div className={styles.link}>
                    <div>
                        // projects
                    </div>                  
                    <AiOutlineFundProjectionScreen size={25} style={icon}/>
                </div>
            </Link>
           
        </div>
                   
      </nav>
    );
};

export default Navbar;