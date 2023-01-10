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
                <Link href='https://github.com/nestordqa' target='_blank'>
                    <AiOutlineGithub size={35} style={style}/>  
                </Link>            
            </div>           
            <div className={styles.iconsContainer}>
                <Link href='https://www.linkedin.com/in/n%C3%A9stor-qui%C3%B1ones-838539238/' target='_blank'>
                    <AiOutlineLinkedin size={35} style={style}/>
                </Link>
            </div>
            <div className={styles.iconsContainer}>
                <Link href='https://wa.me/584121385416' target='_blank'>                
                    <AiOutlineWhatsApp size={35} style={style}/>                
                </Link>
            </div>
            <div className={styles.iconsContainer}>
                <Link href='mailto:ndqa96@gmail.com?Subject=CONTACTO%20PORTFOLIO' target='_blank'>
                    <AiOutlineMail size={35} style={style}/> 
                </Link>              
            </div>          
            <div className={styles.iconsContainer}>
                <Link href='https://instagram.com/nestordqa' target='_blank'>
                    <AiOutlineInstagram size={35} style={style}/>
                </Link>
            </div>           
        </div>
    </>
    );
};

export default SocialMedia;