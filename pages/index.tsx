import Head from 'next/head';
import {NextPage} from 'next';
import Layout from '../components/layout/Layout';
import HomePage from '../components/home/HomePage';


const Home : NextPage= ()=>{
  return (
    <>
      <Layout title={'Nestor Portfolio'}>
        <HomePage/>
      </Layout>
    </>
  )
};
export default Home;
