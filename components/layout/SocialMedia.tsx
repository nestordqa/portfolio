import {NextComponentType} from 'next';
import Link from 'next/link';
import styles from '../../styles/SocialMedia.module.css';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

const SocialMedia : NextComponentType = ()=>{
    const style = {
        color: 'white',
    };
    return(
    <>
        <div className={styles.container}>
            
                <div className={styles.iconsContainer}>
                    <Link href='' target='_blank'>
                        <AiOutlineGithub size={35} style={style}/>  
                    </Link>            
                </div>            
            
                <div className={styles.iconsContainer}>
                    <Link href='' target='_blank'>
                        <AiOutlineLinkedin size={35} style={style}/>
                    </Link>
                </div>
                <div className={styles.iconsContainer}>
                    <Link href='' target='_blank'>                
                        <AiOutlineWhatsApp size={35} style={style}/>                
                    </Link>
                </div>
                <div className={styles.iconsContainer}>
                    <Link href='' target='_blank'>
                        <AiOutlineMail size={35} style={style}/> 
                    </Link>              
                </div>          
                <div className={styles.iconsContainer}>
                    <Link href='' target='_blank'>
                        <AiOutlineInstagram size={35} style={style}/>
                    </Link>
                </div>
            
        
        </div>
    </>
    );
};

export default SocialMedia;