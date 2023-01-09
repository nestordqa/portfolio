import {NextComponentType} from 'next';
import { Link, animateScroll as scroll } from "react-scroll";
import Image from 'next/image';
import About from './About';
import img from '../../public/nestor.png'
import Hello from './Hello';
import styles from '../../styles/HomePage.module.css'

const HomePage : NextComponentType = () =>{

    const imgStyle={
        borderRadius: '100%'
    };
    const linkStyle={
        textDecoration:'none'
    }
    return(
    <>
    <div className={styles.container}>
        <div className={styles.hello}>
            <Hello/>
            <div className={styles.button}>
                <Link
                    activeClass="active"
                    to="smooth-link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Button
                </Link>                
            </div>
        </div>

        <div className={styles.side}>
            <div className={styles.photo}>
                <Image 
                    src={img} 
                    alt='Nestor Quinones' 
                    width={250} 
                    height={250}
                    style={imgStyle}
                    />
            </div>
        </div>
    </div>
    <About/>
    </>
    );
};

export default HomePage;