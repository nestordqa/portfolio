import Head from 'next/head';
import Navbar from './Navbar';
import SocialMedia from './SocialMedia';
import styles from '../../styles/Layout.module.css';

type MainLayoutProps = {
    children: React.ReactNode
    title: String
}

const Layout = ({children, title}:MainLayoutProps) =>{
    return(
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <div className={styles.layout}>
            <Navbar/>
                <main className={styles.container}>
                    {children}
                </main>
            <SocialMedia/>
        </div>

    </>
    );
};

export default Layout;