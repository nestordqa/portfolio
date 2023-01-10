import {NextPage} from 'next';
import Layout from '../components/layout/Layout';
import ProjectsList from '../components/projects/Projects';

const Projects : NextPage = ()=>{
    return(
    <>
        <Layout title={'Nestor Projects'}>
            <ProjectsList/>
        </Layout>
    </>
    );
};

export default Projects;